import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantnewComponent } from './restaurantnew.component';

describe('RestaurantnewComponent', () => {
  let component: RestaurantnewComponent;
  let fixture: ComponentFixture<RestaurantnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
