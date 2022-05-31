import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterListVitaeComponent } from './recruiter-list-vitae.component';

describe('RecruiterListVitaeComponent', () => {
  let component: RecruiterListVitaeComponent;
  let fixture: ComponentFixture<RecruiterListVitaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterListVitaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterListVitaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
