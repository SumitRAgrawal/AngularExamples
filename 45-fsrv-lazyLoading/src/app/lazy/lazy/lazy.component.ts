import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: `
    <p>
      I am loaded Lazily on demand !
    </p>
  `,
  styles: []
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
