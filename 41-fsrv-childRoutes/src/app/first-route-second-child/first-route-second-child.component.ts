import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-route-second-child',
  template: `
    <p>
      first-route-second-child works!
    </p>
  `,
  styles: []
})
export class FirstRouteSecondChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
