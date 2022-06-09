import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInternalComponent } from './sidebar-internal.component';

describe('SidebarInternalComponent', () => {
  let component: SidebarInternalComponent;
  let fixture: ComponentFixture<SidebarInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarInternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
