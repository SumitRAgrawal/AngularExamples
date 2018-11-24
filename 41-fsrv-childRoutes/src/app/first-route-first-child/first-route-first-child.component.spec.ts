import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRouteFirstChildComponent } from './first-route-first-child.component';

describe('FirstRouteFirstChildComponent', () => {
  let component: FirstRouteFirstChildComponent;
  let fixture: ComponentFixture<FirstRouteFirstChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstRouteFirstChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstRouteFirstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
