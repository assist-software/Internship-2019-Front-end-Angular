import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoovieComponent } from './list-moovie.component';

describe('ListMoovieComponent', () => {
  let component: ListMoovieComponent;
  let fixture: ComponentFixture<ListMoovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
