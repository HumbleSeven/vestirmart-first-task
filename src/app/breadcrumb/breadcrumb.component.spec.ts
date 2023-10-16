import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumbComponent } from './breadcrumb.component';

describe('BreadcumbComponent', () => {
  let component: BreadcumbComponent;
  let fixture: ComponentFixture<BreadcumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcumbComponent]
    });
    fixture = TestBed.createComponent(BreadcumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
