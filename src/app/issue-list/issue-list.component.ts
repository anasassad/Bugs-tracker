import { Component, OnInit } from '@angular/core';

import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[] = []
  showReportIssue = false
  selectedIssue : Issue | null = null ;

  constructor(private issuesService: IssuesService) { }

  ngOnInit():  void {
    this.loadIssues()

  }

  private loadIssues() {
     this.issues = this.issuesService.getPendingIssues()
  }


  onConfirm(completed : boolean){
      if (completed && this.selectedIssue){
          this.issuesService.completedIssue(this.selectedIssue);
          this.loadIssues();
      }
      this.selectedIssue = null;
  }

  onCloseReport(){

    this.showReportIssue = false
    this.loadIssues()
  }

}
