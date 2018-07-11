import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsreviewnewComponent } from './restaurantsreviewnew.component';

describe('RestaurantsreviewnewComponent', () => {
  let component: RestaurantsreviewnewComponent;
  let fixture: ComponentFixture<RestaurantsreviewnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsreviewnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsreviewnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
