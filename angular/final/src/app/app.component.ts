import { Component } from '@angular/core';

@Component({
  selector: 'sjs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = '2017/5';
  monday = true;

  next() {
    let dateParts = this.date.split('/');
    let date = new Date(+dateParts[0], +dateParts[1]);
    date.setMonth(date.getMonth() + 1);
    this.date = `${date.getFullYear()}/${date.getMonth()}`;
  }
}
