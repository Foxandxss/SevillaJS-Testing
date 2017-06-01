import { Injectable } from '@angular/core';

export class Day {
  day: number;
  outsideMonth: boolean;
}

@Injectable()
export class CalendarService {

  getMonth(year: number, month: number, startOnMonday = false): Day[] {
    const days: Day[] = [];
    const date = new Date(year, month, 1);
    const startingDay = startOnMonday ? 1 : 0;
    const difference = startingDay - date.getDay();
    const numberOfLastDays = this.getNumberOfLastDays(difference);

    date.setDate(numberOfLastDays);
    for (let i = 0; i < 42; i++) {
      const loopMonth = date.getMonth();
      days[i] = { day: date.getDate(), outsideMonth: loopMonth !== month }
      date.setDate(date.getDate() + 1);
    }

    return days;
  }

  private getNumberOfLastDays(difference): number {
    return difference === 1 ? -5 : difference + 1;
  }

}
