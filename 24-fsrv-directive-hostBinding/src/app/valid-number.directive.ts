import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({ selector: '[appValidNumber]' })
export class ValidNumberDirective {

  @HostBinding('style.borderColor') border: string;
  @HostListener('input', ['$event'])
  onInput(event) {
    console.log(event);
    const el: any = event.target ;
    const reg = new RegExp(/^\d+$/);
    if (!reg.test(el.value)) {
      this.border = 'red';
    } else {
      this.border = 'green';
    }
  }
}
