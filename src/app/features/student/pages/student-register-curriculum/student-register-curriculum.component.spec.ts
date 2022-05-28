import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterCurriculumComponent } from './student-register-curriculum.component';

describe('StudentRegisterCurriculumComponent', () => {
  let component: StudentRegisterCurriculumComponent;
  let fixture: ComponentFixture<StudentRegisterCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegisterCurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisterCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
