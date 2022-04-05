import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Issue } from '../issue'
import { IssuesService } from '../issues.service'

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  issueForm : FormGroup | undefined
  @Input()
  issue : Issue | null = null
  @Output()
  editFormClose = new EventEmitter()

  constructor(private formBuilder: FormBuilder,private issuesService:IssuesService) { }

  ngOnInit() {
    this.issueForm = this.formBuilder.group({
      title : [this.issue?.title,Validators.required],
        description : [this.issue?.description],
        type : [this.issue?.type,Validators.required],
        priority : [this.issue?.priority,Validators.required],
    })
  }
  editReport(){
    if(this.issueForm && this.issueForm.invalid){
      this.issueForm.markAllAsTouched()
      return
    }
    this.issuesService.editIssue(this.issue?.issueNo,this.issueForm?.value)
    this.editFormClose.emit()
  }

}
