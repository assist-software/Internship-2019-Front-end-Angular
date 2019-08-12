import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMoovieComponent } from './admin-moovie.component';

describe('AdminMoovieComponent', () => {
  let component: AdminMoovieComponent;
  let fixture: ComponentFixture<AdminMoovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMoovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMoovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
