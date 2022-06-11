import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterListResumeComponent } from './recruiter-list-resume.component';

describe('RecruiterListResumeComponent', () => {
  let component: RecruiterListResumeComponent;
  let fixture: ComponentFixture<RecruiterListResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterListResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterListResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
