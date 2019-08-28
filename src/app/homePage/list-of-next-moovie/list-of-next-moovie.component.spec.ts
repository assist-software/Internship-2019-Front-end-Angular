import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfNextMoovieComponent } from './list-of-next-moovie.component';

describe('ListOfNextMoovieComponent', () => {
  let component: ListOfNextMoovieComponent;
  let fixture: ComponentFixture<ListOfNextMoovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfNextMoovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfNextMoovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
