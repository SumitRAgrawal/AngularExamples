import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)">
        Click Me
      </button>
      <input type="text" #username>
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name = 'Fiserv';
  handleClick(value: string) {
    console.log(value);
  }
}
