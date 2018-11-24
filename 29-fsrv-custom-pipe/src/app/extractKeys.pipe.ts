import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractKeys'
})

export class ExtractKeysPipe implements PipeTransform {
  transform(input: any, position: number): string[] | void {
    if (this.isObject(input)) {
      if (position) {
        return Object.keys(input).filter((key, index) => index === position );
      }
      return Object.keys(input);
    }

    return input;
  }

  isObject(data: any): boolean {
    return typeof data === 'object' && data !== null;
  }
}
