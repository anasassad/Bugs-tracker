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
  loading = true

  constructor(private issuesService: IssuesService) { }

  ngOnInit():  void {
    this.loadIssues()
    setTimeout(() => this.loading = false ,2000)

  }

  private loadIssues() {
     this.issues = this.issuesService.getPendingIssues()
  }

  onCloseReport(){

    this.showReportIssue = false
    this.loadIssues()
  }

}
