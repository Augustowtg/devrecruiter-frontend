import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterRegisterJobComponent } from './recruiter-register-job.component';

describe('RecruiterRegisterJobComponent', () => {
  let component: RecruiterRegisterJobComponent;
  let fixture: ComponentFixture<RecruiterRegisterJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterRegisterJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterRegisterJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
