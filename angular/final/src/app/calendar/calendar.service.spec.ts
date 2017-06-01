import { TestBed, inject } from '@angular/core/testing';

import { CalendarService, Day } from './calendar.service';

describe('CalendarService', () => {
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarService]
    });

    service = TestBed.get(CalendarService);
  });

  describe('starting on Monday', () => {
    it('should be able to generate month starting on Saturday', () => {
      const days: Day[] = service.getMonth(2017, 3, true);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(27);
      expect(days.pop().day).toBe(7);
    });

    it('should be able to generate month starting on Monday', () => {
      const days: Day[] = service.getMonth(2017, 4, true);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(1);
      expect(days.pop().day).toBe(11);
    });

    it('should be able to generate month starting on Thursday', () => {
      const days: Day[] = service.getMonth(2017, 5, true);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(29);
      expect(days.pop().day).toBe(9);
    });

    it('should be able to generate month starting on Sunday', () => {
      const days: Day[] = service.getMonth(2017, 9, true);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(25);
      expect(days.pop().day).toBe(5);
    });

    it('should be able to generate a non leap february', () => {
      const days: Day[] = service.getMonth(2017, 1, true);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(30);
      expect(days.pop().day).toBe(12);
    });

    it('should be able to generate a leap february', () => {
      const days: Day[] = service.getMonth(2016, 1, true);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(1);
      expect(days.pop().day).toBe(13);
    });

    it('should work on a future future date', () => {
      const days: Day[] = service.getMonth(2040, 7, true);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(30);
      expect(days.pop().day).toBe(9);
    });
  });

  describe('starting on Sunday', () => {
    it('should be able to generate month starting on Saturday', () => {
      const days: Day[] = service.getMonth(2017, 3);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(26);
      expect(days.pop().day).toBe(6);
    });

    it('should be able to generate month starting on Monday', () => {
      const days: Day[] = service.getMonth(2017, 4);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(30);
      expect(days.pop().day).toBe(10);
    });

    it('should be able to generate month starting on Thursday', () => {
      const days: Day[] = service.getMonth(2017, 5);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(28);
      expect(days.pop().day).toBe(8);
    });

    it('should be able to generate month starting on Sunday', () => {
      const days: Day[] = service.getMonth(2017, 9);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(1);
      expect(days.pop().day).toBe(11);
    });

    it('should be able to generate a non leap february', () => {
      const days: Day[] = service.getMonth(2017, 1);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(29);
      expect(days.pop().day).toBe(11);
    });

    it('should be able to generate a leap february', () => {
      const days: Day[] = service.getMonth(2016, 1);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(31);
      expect(days.pop().day).toBe(12);
    });

    it('should work on a future future date', () => {
      const days: Day[] = service.getMonth(2040, 7);
      expect(days.length).toBe(42);
      expect(days[0].day).toBe(29);
      expect(days.pop().day).toBe(8);
    });
  });

  it('should mark the days outside the month', () => {
    const days: Day[] = service.getMonth(2017, 5, true);
    const day29 = days[0];
    const day1Jan = days[3];
    const day1Jul = days[33];

    expect(day29).toEqual({ day: 29, outsideMonth: true});
    expect(day1Jan).toEqual({ day: 1, outsideMonth: false});
    expect(day1Jul).toEqual({ day: 1, outsideMonth: true});
  });
});
