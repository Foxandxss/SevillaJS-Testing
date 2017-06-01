import { browser, by, element } from 'protractor';

export class CalendarPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sjs-root h1')).getText();
  }
}
