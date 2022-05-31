import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterVitaeComponent } from './student-register-vitae.component';

describe('StudentRegisterVitaeComponent', () => {
  let component: StudentRegisterVitaeComponent;
  let fixture: ComponentFixture<StudentRegisterVitaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegisterVitaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisterVitaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
