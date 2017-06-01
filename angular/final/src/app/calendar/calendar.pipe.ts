import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {

  transform(value: string): string {
    let dateParts = value.split('/');

    if (dateParts.length !== 2) return 'Unknown Date';

    let date = new Date(+dateParts[0], +dateParts[1]);

    return `${date.toLocaleDateString('en-us', { month: 'long' })} of ${date.getFullYear()}`;
  }

}
