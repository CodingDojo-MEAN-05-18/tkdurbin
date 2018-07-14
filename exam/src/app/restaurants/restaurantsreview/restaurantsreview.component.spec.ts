import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsreviewComponent } from './restaurantsreview.component';

describe('RestaurantsreviewComponent', () => {
  let component: RestaurantsreviewComponent;
  let fixture: ComponentFixture<RestaurantsreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
