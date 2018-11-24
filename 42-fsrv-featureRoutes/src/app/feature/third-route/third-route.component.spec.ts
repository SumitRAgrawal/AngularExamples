import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdRouteComponent } from './third-route.component';

describe('ThirdRouteComponent', () => {
  let component: ThirdRouteComponent;
  let fixture: ComponentFixture<ThirdRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
