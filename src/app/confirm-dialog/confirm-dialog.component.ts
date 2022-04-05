import { Component, EventEmitter, Input, Output } from '@angular/core'

import { Issue } from '../issue'

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent{
  //Collecting the input of the IssueNo
  @Input()
  issue : Issue | null = null
  //The Output is going to be send to confirm or unconfirm the resolve of the issue
  @Output()
  confirm = new EventEmitter<boolean>()

  constructor() { }

  agree() {
    this.confirm.emit(true)
    this.issue = null
  }

  disagree() {
    this.confirm.emit(false)
    this.issue = null
  }
}
