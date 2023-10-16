import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopContentComponent } from './shop-content.component';

describe('ShopContentComponent', () => {
  let component: ShopContentComponent;
  let fixture: ComponentFixture<ShopContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopContentComponent]
    });
    fixture = TestBed.createComponent(ShopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
