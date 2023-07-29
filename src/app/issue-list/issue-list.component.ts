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
  selectedIssue : Issue | null = null

  constructor(private issuesService: IssuesService) { }

  ngOnInit():  void {
    this.loadIssues()

  }

  private loadIssues() {
     this.issues = this.issuesService.getPendingIssues()
  }

  onConfirm(confirmed : boolean){
    if(confirmed && this.selectedIssue){
      this.issuesService.completeIssue(this.selectedIssue)
      this.loadIssues()
    }
    this.selectedIssue = null
  }

  onCloseReport(){

    this.showReportIssue = false
    this.loadIssues()
  }

}
