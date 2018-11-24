import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-route',
  template: `
    <p>
      first-route works!
    </p>
  `,
  styles: []
})
export class FirstRouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
