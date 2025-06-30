const Calculator = require('../src/Calculator');

describe('Calculator', () => {
  it('should add two numbers', () => {
    expect(Calculator.add(2, 3)).toBe(5);
    expect(Calculator.add(-1, 1)).toBe(0);
  });

  it('should subtract two numbers', () => {
    expect(Calculator.subtract(5, 3)).toBe(2);
    expect(Calculator.subtract(0, 5)).toBe(-5);
  });

  it('should multiply two numbers', () => {
    expect(Calculator.multiply(4, 3)).toBe(12);
    expect(Calculator.multiply(-2, 3)).toBe(-6);
  });

  it('should divide two numbers', () => {
    expect(Calculator.divide(10, 2)).toBe(5);
    expect(Calculator.divide(5, 2)).toBe(2.5);
  });

  it('should handle division by zero', () => {
    expect(() => Calculator.divide(5, 0)).toThrow('Division by zero');
  });
});
