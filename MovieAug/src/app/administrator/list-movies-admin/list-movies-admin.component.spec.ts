import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesAdminComponent } from './list-movies-admin.component';

describe('ListMoviesAdminComponent', () => {
  let component: ListMoviesAdminComponent;
  let fixture: ComponentFixture<ListMoviesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoviesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoviesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
