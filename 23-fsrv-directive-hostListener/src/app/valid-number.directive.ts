import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appValidNumber]' })
export class ValidNumberDirective {
  @HostListener('input', ['$event'])
  onInput(event) {
    console.log(event);
    const el: any = event.target ;
    const reg = new RegExp(/^\d+$/);
    if (!reg.test(el.value)) {
      el.style.borderColor = 'red';
    } else {
      el.style.borderColor = 'green';
    }
  }
}
