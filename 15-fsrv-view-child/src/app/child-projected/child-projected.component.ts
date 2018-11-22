import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-projected',
  template: `
    <p>
      child-projected works!
    </p>
  `
})
export class ChildProjectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
