import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoovieDetailsComponent } from './moovie-details.component';

describe('MoovieDetailsComponent', () => {
  let component: MoovieDetailsComponent;
  let fixture: ComponentFixture<MoovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
