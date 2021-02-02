import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateYear'
})
export class DateYearPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
