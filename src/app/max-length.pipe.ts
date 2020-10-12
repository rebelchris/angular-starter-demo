import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: string, length: number): string {
    if(length < value.length) {
      return value.substring(0, length) + '...';
    } 
    return value;
  }

}
