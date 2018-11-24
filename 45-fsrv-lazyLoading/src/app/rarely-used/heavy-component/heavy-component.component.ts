import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-component',
  template: `
    <p>
      heavy-component works!
    </p>
  `,
  styles: []
})
export class HeavyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
