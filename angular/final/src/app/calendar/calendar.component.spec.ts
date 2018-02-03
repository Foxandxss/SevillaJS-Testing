import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalendarComponent } from './calendar.component';
import { CalendarPipe } from './calendar.pipe';
import { CalendarService } from './calendar.service';
import { CalendarServiceStub } from '../../testing/mocks';

describe('CalendarComponent', () => {
  let hostComponent: TestComponent;
  let component: CalendarComponent;
  let fixture: ComponentFixture<TestComponent>;
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent, TestComponent, CalendarPipe],
      providers: [{ provide: CalendarService, useClass: CalendarServiceStub }]
    });

    fixture = TestBed.createComponent(TestComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.children[0].componentInstance;
    service = fixture.debugElement.injector.get(CalendarService);

    fixture.detectChanges();
  });

  it('has an input for the date and startsOnMonday', () => {
    expect(component.date).toBe('2017/5');
    expect(component.startsOnMonday).toBe(false);
  });

  it('contains the formatted date on a header', () => {
    const header: HTMLDivElement = fixture.debugElement.query(By.css('.card > .card-header')).nativeElement;
    expect(header.textContent).toContain('June of 2017');
  });

  it('ask the calendar service for the proper days', () => {
    spyOn(service, 'getMonth').and.callThrough();
    component.ngAfterContentChecked();
    expect(component.days.length).toBe(42);
    expect(service.getMonth).toHaveBeenCalledWith(2017, 5, false);
  });

  it('shows the days on screen', () => {
    const days = fixture.debugElement.queryAll(By.css('.a-day'));
    expect(days.length).toBe(42);
    expect(days[0].children[0].nativeElement.textContent).toBe('28');
    expect(days.pop().children[0].nativeElement.textContent).toBe('8');
  });

  it('applies a class for days outside the month', () => {
    const days = fixture.debugElement.queryAll(By.css('.a-day'));
    const outsideDay = days[0].children[0].nativeElement;
    expect(outsideDay.getAttribute('class')).toContain('outside');
    const currentMonthDay = days[15].children[0].nativeElement;
    expect(currentMonthDay.getAttribute('class')).not.toContain('outside');
  });

  it('has they week days letters on top (by default, sunday)', () => {
    const weekDays = fixture.debugElement.queryAll(By.css('.a-week-day'));
    expect(weekDays.length).toBe(7);
    const sunday = weekDays[0].children[0].nativeElement;
    expect(sunday.textContent).toBe('S');
    const saturday = weekDays[6].children[0].nativeElement;
    expect(saturday.textContent).toBe('S');
  });

  it('has an attribute to start on monday', () => {
    hostComponent.monday = true;
    fixture.detectChanges();

    const weekDays = fixture.debugElement.queryAll(By.css('.a-week-day'));
    expect(weekDays.length).toBe(7);
    const monday = weekDays[0].children[0].nativeElement;
    expect(monday.textContent).toBe('M');
    const sunday = weekDays[6].children[0].nativeElement;
    expect(sunday.textContent).toBe('S');
  });

  it('should have the proper calendar when it starts on monday', () => {
    hostComponent.monday = true;
    fixture.detectChanges();

    const days = fixture.debugElement.queryAll(By.css('.a-day'));
    expect(days.length).toBe(42);
    expect(days[0].children[0].nativeElement.textContent).toBe('29');
    expect(days.pop().children[0].nativeElement.textContent).toBe('9');
  });

});

@Component({
  selector: 'test-cmp',
  template: '<sjs-calendar [date]="date" [startsOnMonday]="monday"></sjs-calendar>'
})
class TestComponent {
  date = '2017/5';
  monday = false;
}
