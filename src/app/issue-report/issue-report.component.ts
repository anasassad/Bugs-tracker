import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {
 issueForm: FormGroup | undefined
 @Output()
 formClose = new EventEmitter()
  constructor(private formBuilder: FormBuilder,private issuesService:IssuesService) { }

  ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
        title : ['',Validators.required],
        description : [''],
        type : ['',Validators.required],
        priority : ['',Validators.required],
    });
  }

  report(): void{
      if(this.issueForm && this.issueForm.invalid){
        this.issueForm.markAllAsTouched();
        return;
      }
      if(!this.issueForm?.get('description')?.value){
        this.issueForm?.get('description')?.setValue("Blank");
      }
      this.issuesService.createIssue(this.issueForm?.value)
      this.formClose.emit();
  }

}
