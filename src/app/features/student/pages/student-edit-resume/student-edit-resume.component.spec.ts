import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditResumeComponent } from './student-edit-resume.component';

describe('StudentEditResumeComponent', () => {
  let component: StudentEditResumeComponent;
  let fixture: ComponentFixture<StudentEditResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEditResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
