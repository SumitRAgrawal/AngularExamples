import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNonProjectedComponent } from './child-non-projected.component';

describe('ChildNonProjectedComponent', () => {
  let component: ChildNonProjectedComponent;
  let fixture: ComponentFixture<ChildNonProjectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildNonProjectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNonProjectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
