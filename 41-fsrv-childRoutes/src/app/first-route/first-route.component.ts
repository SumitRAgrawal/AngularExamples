import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-route',
  template: `
    <p>
      first-route works!
    </p>
    <a [routerLink] = "['child1']" routerLinkActive="active"  >Child1</a>
        <a [routerLink] = "['child2']" routerLinkActive="active" >Child2</a>
    <router-outlet></router-outlet>
  `,
  styles: ['a {padding: 5px}', '.active {color: #ff6600}']
})
export class FirstRouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
