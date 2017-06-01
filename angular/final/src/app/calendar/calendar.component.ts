import { AfterContentChecked, Component, Input } from '@angular/core';

import { CalendarService, Day } from './calendar.service';

@Component({
  selector: 'sjs-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements AfterContentChecked {
  private _startsOnMonday;

  @Input() date;
  @Input()
  set startsOnMonday(value: boolean) {
    this.weekDays = value ? this.weekDaysList[1] : this.weekDaysList[0];
    this._startsOnMonday = value;
  }

  get startsOnMonday() { return this._startsOnMonday; }

  days: Day[] = [];

  weekDaysList = [
    ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  ];

  weekDays = [];

  constructor(private service: CalendarService) { }

  ngAfterContentChecked() {
    this.fetchDays();
  }

  private fetchDays() {
    const dateParams = this.date.split('/');
    this.days = this.service.getMonth(+dateParams[0], +dateParams[1], this.startsOnMonday);
  }

}
