import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  BrowserModule
} from '@angular/platform-browser'
import { ClarityModule } from '@clr/angular'
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component'
import { IssueEditComponent } from './issue-edit/issue-edit.component'
import { IssueListComponent } from './issue-list/issue-list.component'
import { IssueReportComponent } from './issue-report/issue-report.component'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueReportComponent,
    ConfirmDialogComponent,
    IssueEditComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    //Responsible of the page anmations
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
