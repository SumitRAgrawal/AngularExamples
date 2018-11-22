import { Component,ViewChildren, AfterViewInit, QueryList, AfterContentInit } from '@angular/core';
import { ChildNonProjectedComponent } from '../child-non-projected/child-non-projected.component';

@Component({
  selector: 'app-child',
  template: `
  <div>
    Child Component
    <app-child-non-projected></app-child-non-projected>
    <app-child-non-projected></app-child-non-projected>
  </div>
  `
})
export class ChildComponent implements AfterViewInit {

  @ViewChildren(ChildNonProjectedComponent) views: QueryList<ChildNonProjectedComponent>;

  ngAfterViewInit() {
    console.log(this.views);
  }

}
