import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMoovieComponent } from './carousel-moovie.component';

describe('CarouselMoovieComponent', () => {
  let component: CarouselMoovieComponent;
  let fixture: ComponentFixture<CarouselMoovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselMoovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMoovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
