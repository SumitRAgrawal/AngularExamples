import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-route',
  template: `
    <p>
      second-route works!
    </p>
  `,
  styles: []
})
export class SecondRouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
