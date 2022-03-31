import { IssuesService } from './issues.service';
import { TestBed } from '@angular/core/testing';
import { issues } from 'src/assets/mock-issues';

describe('IssuesService', () => {
  let service: IssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    //Testing the euqlity of the given length
    expect(service.getPendingIssues().length).toEqual(issues.length);
  });
});
