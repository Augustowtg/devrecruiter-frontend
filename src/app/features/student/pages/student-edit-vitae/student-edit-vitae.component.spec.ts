import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditVitaeComponent } from './student-edit-vitae.component';

describe('StudentEditVitaeComponent', () => {
  let component: StudentEditVitaeComponent;
  let fixture: ComponentFixture<StudentEditVitaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEditVitaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditVitaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
