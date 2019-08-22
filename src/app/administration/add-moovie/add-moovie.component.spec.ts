import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoovieComponent } from './add-moovie.component';

describe('AddMoovieComponent', () => {
  let component: AddMoovieComponent;
  let fixture: ComponentFixture<AddMoovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
