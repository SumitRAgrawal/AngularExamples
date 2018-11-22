import { Component, ViewChild, AfterViewInit, } from '@angular/core';
import { ChildNonProjectedComponent } from '../child-non-projected/child-non-projected.component';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child component
    </p>
    <ng-content select="app-child-projected"></ng-content>
    <app-child-non-projected [data]="'W'" ><app-child-non-projected>
  `
})
export class ChildComponent implements AfterViewInit {

  @ViewChild(ChildNonProjectedComponent) nonProjected: ChildNonProjectedComponent;
  constructor() { }

  ngAfterViewInit() {
    console.log(this.nonProjected);
  }

}
