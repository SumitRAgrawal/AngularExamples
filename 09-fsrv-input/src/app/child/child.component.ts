import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div>
    This is child component - got data : {{data}}
  </div>
  `
})

export class ChildComponent implements OnInit {
  @Input()
  data;

  constructor() { }

  ngOnInit() { }
}
