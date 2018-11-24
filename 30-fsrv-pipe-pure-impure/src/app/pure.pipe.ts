import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure'
})
export class PurePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(`from pure pipe : ${value}`);
    return value;
  }

}
