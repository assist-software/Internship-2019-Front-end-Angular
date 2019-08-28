import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMoovieComponent } from './new-moovie.component';

describe('NewMoovieComponent', () => {
  let component: NewMoovieComponent;
  let fixture: ComponentFixture<NewMoovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMoovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMoovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
