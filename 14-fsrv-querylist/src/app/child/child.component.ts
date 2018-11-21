import { Component, OnInit, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { ChildProjectedComponent } from '../child-projected/child-projected.component';


@Component({
  selector: 'app-child',
  template: `
    <p>
      child component
    </p>
    <ng-content select="app-child-projected">
    </ng-content>
  `
})
export class ChildComponent implements OnInit, AfterContentInit {

  @ContentChildren(ChildProjectedComponent) childs: QueryList<ChildProjectedComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.childs.forEach((item, i) =>  item.btnClicked.subscribe(cl => console.log(`${ i + 1 } clicked!` )) );
  }

}
