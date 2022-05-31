import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVitaeComponent } from './student-vitae.component';

describe('StudentVitaeComponent', () => {
  let component: StudentVitaeComponent;
  let fixture: ComponentFixture<StudentVitaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentVitaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentVitaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
