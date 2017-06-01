import { Component, Input } from '@angular/core';

export class CalendarServiceStub {
  getMonth(year: number, month: number, startsOnMonday?: boolean) {
    const days = [];

    for (let i = startsOnMonday ? 29 : 28; i <= 31; i++) {
      days.push({day: i, outsideMonth: true});
    }

    for (let i = 1; i <= 30; i++) {
      days.push({day: i, outsideMonth: false});
    }

    for (let i = 1; i <= (startsOnMonday ? 9 : 8) ; i++) {
      days.push({day: i, outsideMonth: true});
    }

    return days;
  }
}

@Component({
  selector: 'sjs-calendar',
  template: ''
})
export class CalendarComponentStub {
  @Input() date;
  @Input() startsOnMonday;
}
