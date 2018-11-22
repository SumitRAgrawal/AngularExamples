import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-non-projected',
  template: `
    <p>
      Child for non projected content
    </p>
  `,
  styles: []
})
export class ChildNonProjectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
