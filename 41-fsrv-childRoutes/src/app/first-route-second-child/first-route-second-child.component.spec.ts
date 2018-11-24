import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRouteSecondChildComponent } from './first-route-second-child.component';

describe('FirstRouteSecondChildComponent', () => {
  let component: FirstRouteSecondChildComponent;
  let fixture: ComponentFixture<FirstRouteSecondChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstRouteSecondChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstRouteSecondChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
