import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRouteComponent } from './first-route.component';

describe('FirstRouteComponent', () => {
  let component: FirstRouteComponent;
  let fixture: ComponentFixture<FirstRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
