import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAndCardsComponent } from './nav-and-cards.component';

describe('NavAndCardsComponent', () => {
  let component: NavAndCardsComponent;
  let fixture: ComponentFixture<NavAndCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavAndCardsComponent]
    });
    fixture = TestBed.createComponent(NavAndCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
