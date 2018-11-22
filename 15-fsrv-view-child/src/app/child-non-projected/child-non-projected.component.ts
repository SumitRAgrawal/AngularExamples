import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-non-projected',
  template: `
    <p>
      child-non-projected works!
    </p>
    Hello {{data}}
  `,
  styles: []
})
export class ChildNonProjectedComponent implements OnInit {

  @Input() data: string;
  constructor() { }

  ngOnInit() {
  }

}
