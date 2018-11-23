import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[appToggle]', exportAs: 'toggle' })
export class ToggleDirective {
  handleToggle() {
    console.log('I am toggled!');
  }
}
