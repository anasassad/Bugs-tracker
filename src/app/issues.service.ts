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

  completedIssue(issue:Issue){
     //Change the status of the current unresolved selectedIssue
     const selectedIssue : Issue = {
       ...issue ,
       completed : new Date()
     };

     //Find the matched Issue by it index and return index of this Issue Object
     const index = issues.findIndex( i => i === issue);

     //Set as Completed in the current issues array
     issues[index] = selectedIssue ;
  }

  getSuggestions(title : string): Issue[] {
        if(title.length > 3){
          return this.issues.filter(issue=> issue.title.indexOf(title) !== -1);
        }
        return [];
  }
}
