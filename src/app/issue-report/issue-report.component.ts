import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Issue } from '../issue'
import { IssuesService } from '../issues.service'

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {
 issueForm: FormGroup | undefined
 @Output()
 formClose = new EventEmitter()
 suggestions : Issue[] = []
  constructor(private formBuilder: FormBuilder,private issuesService:IssuesService) { }

  ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
        title : ['',Validators.required],
        description : [''],
        type : ['',Validators.required],
        priority : ['',Validators.required],
    })
    //Listener for the changed happens during typing in title box form
    this.issueForm.controls['title'].valueChanges.subscribe((title) => {
        //Assign the values coming from existing issues to complete the suggestions
        this.suggestions = this.issuesService.getSuggestions(title)
    })
  }

  report(): void{
      if(this.issueForm && this.issueForm.invalid){
        this.issueForm.markAllAsTouched()
        return
      }
      this.issuesService.createIssue(this.issueForm?.value)
      this.formClose.emit()
  }

}
