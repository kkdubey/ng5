import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselcardsComponent } from './carouselcards.component';

describe('CarouselcardsComponent', () => {
  let component: CarouselcardsComponent;
  let fixture: ComponentFixture<CarouselcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
