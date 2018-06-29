import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooknewComponent } from './booknew.component';

describe('BooknewComponent', () => {
  let component: BooknewComponent;
  let fixture: ComponentFixture<BooknewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooknewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooknewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
