import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPartComponent } from './last-part.component';

describe('LastPartComponent', () => {
  let component: LastPartComponent;
  let fixture: ComponentFixture<LastPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
