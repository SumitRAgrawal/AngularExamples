import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProjectedComponent } from './child-projected.component';

describe('ChildProjectedComponent', () => {
  let component: ChildProjectedComponent;
  let fixture: ComponentFixture<ChildProjectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildProjectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildProjectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
