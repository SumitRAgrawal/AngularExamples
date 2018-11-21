import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { ChildProjectedComponent } from '../child-projected/child-projected.component';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child component project content will go below
    </p>
    <ng-content selector="app-child-projected"></ng-content>

  `
})
export class ChildComponent implements AfterContentInit {

  @ContentChild(ChildProjectedComponent) buttonClicked: ChildProjectedComponent;
  constructor() { }

  ngAfterContentInit() {
    this.buttonClicked.buttonClicked.subscribe(() => console.log('clicked'));
  }
}
