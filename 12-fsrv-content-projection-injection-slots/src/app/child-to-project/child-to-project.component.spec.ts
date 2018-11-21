import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToProjectComponent } from './child-to-project.component';

describe('ChildToProjectComponent', () => {
  let component: ChildToProjectComponent;
  let fixture: ComponentFixture<ChildToProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildToProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
