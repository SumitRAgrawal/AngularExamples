import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-route-first-child',
  template: `
    <p>
      first-route-first-child works!
    </p>
  `,
  styles: []
})
export class FirstRouteFirstChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
