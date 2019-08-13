import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiglightMoovieComponent } from './higlight-moovie.component';

describe('HiglightMoovieComponent', () => {
  let component: HiglightMoovieComponent;
  let fixture: ComponentFixture<HiglightMoovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiglightMoovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiglightMoovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
