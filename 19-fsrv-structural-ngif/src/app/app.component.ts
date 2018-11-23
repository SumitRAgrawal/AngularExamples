import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <input type="text" [value]="name" (input)= handleInput($event) >
  </div>

  <div *ngIf="name else elseblock">
  Name is : {{name}}
  </div>

  <ng-template #elseblock>
    Please enter name
  </ng-template>
  `
})

export class AppComponent implements OnInit {
  name = '';

  constructor() { }

  ngOnInit() { }

  handleInput($event) {
    this.name = $event.target.value;
  }
}
