export class Calculator {
  addition(num1: number, num2: number): number {
    return num1 + num2;
  }

  division(dividend: number, divisor: number): number {
    if (divisor === 0) {
      throw new Error('Calculator does not allow division by 0');
    }

    return Math.round(dividend / divisor);
  }
}
