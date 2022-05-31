import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotloggedFooterComponent } from './notlogged-footer.component';

describe('NotloggedFooterComponent', () => {
  let component: NotloggedFooterComponent;
  let fixture: ComponentFixture<NotloggedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotloggedFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotloggedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
