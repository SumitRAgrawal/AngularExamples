import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div>
      <p>
        This is child component
      </p>
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
