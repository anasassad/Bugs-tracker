import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issues: Issue[] = issues ;
  constructor() { }

  getPendingIssues(): Issue[] {
    //Back In few Seconds
    return this.issues.filter((issue) => {
      return !issue.completed
    }
      );
  }

  createIssue(issue: Issue){
      issue.issueNo = this.issues.length + 1 ;
      this.issues.push(issue);
  }
}
