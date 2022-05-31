import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedNavComponent } from './not-logged-nav.component';

describe('NotLoggedNavComponent', () => {
  let component: NotLoggedNavComponent;
  let fixture: ComponentFixture<NotLoggedNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotLoggedNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLoggedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
