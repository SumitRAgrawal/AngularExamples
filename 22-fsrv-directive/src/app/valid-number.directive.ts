import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[appValidNumber]' })
export class ValidNumberDirective {
  constructor(private element: ElementRef) {
    console.log(this.element);
   }
}
