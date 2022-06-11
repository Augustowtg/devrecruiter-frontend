import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterResumeComponent } from './student-register-resume.component';

describe('StudentRegisterResumeComponent', () => {
  let component: StudentRegisterResumeComponent;
  let fixture: ComponentFixture<StudentRegisterResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegisterResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisterResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
