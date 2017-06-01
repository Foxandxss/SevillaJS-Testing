import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponentStub } from '../testing/mocks';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let calendarEl: DebugElement;
  let calendar: CalendarComponentStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CalendarComponentStub
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    calendarEl = fixture.debugElement.query(By.css('sjs-calendar'));
    calendar = calendarEl.injector.get(CalendarComponentStub);
  });

  it('contains the calendar', () => {
    expect(calendar).toBeTruthy();
  });

  it('has a date and startsOnMonday for the parameters', () => {
    expect(component.date).toBe('2017/5');
    expect(component.monday).toBe(true);
  });

  it('uses the attributes on the template', () => {
    expect(calendar.date).toBe('2017/5');
    expect(calendar.startsOnMonday).toBe(true);
  });

  it('has a next method to show the next month', () => {
    component.next();
    fixture.detectChanges();
    expect(calendar.date).toBe('2017/6');
  });

  it('has a button that calls the next method', () => {
    spyOn(component, 'next');
    const buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonEl.click();
    expect(component.next).toHaveBeenCalled();
  });
});
