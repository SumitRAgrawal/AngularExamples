import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure : false
})
export class ImpurePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(`from impure pipe : ${value}`);
    return value;
  }

}
