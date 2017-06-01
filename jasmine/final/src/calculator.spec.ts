import { Calculator } from './calculator';

describe('Calculator', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('Addition', () => {
    it('should be able to sum 5 and 3 to return 8', () => {
      const result = calc.addition(5, 3);
      expect(result).toBe(8);
    });

    it('should be able to sum a number with 0', () => {
      const result = calc.addition(7, 0);
      expect(result).toBe(7);
    });

    it('should be able to sum a negative number with a positive result', () => {
      const result = calc.addition(7, -3);
      expect(result).toBe(4);
    });

    it('should be able to sum a negative number with a negative result', () => {
      const result = calc.addition(-20, 7);
      expect(result).toBe(-13);
    });
  });

  describe('division', () => {
    it('should be able to do a exact division', () => {
      const result = calc.division(20, 2);
      expect(result).toBe(10);
    });

    it('returns a rounded result for a non exact division', () => {
      const result = calc.division(20, 3);
      expect(result).toBe(7);
    });

    it('should throw an exception if we divide by 0', () => {
      expect(() => {
        calc.division(5, 0);
      }).toThrow(new Error('Calculator does not allow division by 0'));
    });
  });
});
