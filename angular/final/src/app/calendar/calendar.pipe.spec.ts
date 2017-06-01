import { CalendarPipe } from './calendar.pipe';

describe('CalendarPipe', () => {
  let pipe: CalendarPipe;

  beforeEach(() => {
    pipe = new CalendarPipe();
  });

  it('transforms 2017/05 to "June of 2017"', () => {
    expect(pipe.transform('2017/05')).toBe('June of 2017');
  });

  it('transforms 2040/7 to "August of 2040"', () => {
    expect(pipe.transform('2040/7')).toBe('August of 2040');
  });

  it('transforms 2017 to "Unknown date"', () => {
    expect(pipe.transform('2017')).toBe('Unknown Date');
  });
});
