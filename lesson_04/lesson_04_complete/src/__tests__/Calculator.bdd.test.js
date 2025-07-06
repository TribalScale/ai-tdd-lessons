// BDD-style test example using Jest for a Calculator
// This demonstrates the use of `describe`, `beforeEach`, and `it` in a BDD (Behavior-Driven Development) style.

class Calculator {
  constructor() {
    this.value = 0;
  }
  add(num) {
    this.value += num;
    return this.value;
  }
  subtract(num) {
    this.value -= num;
    return this.value;
  }
}

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('when adding numbers', () => {
    it('should add a positive number', () => {
      calculator.add(5);
      expect(calculator.value).toBe(5);
    });
    it('should add multiple numbers sequentially', () => {
      calculator.add(2);
      calculator.add(3);
      expect(calculator.value).toBe(5);
    });
  });

  describe('when subtracting numbers', () => {
    it('should subtract a positive number', () => {
      calculator.add(10);
      calculator.subtract(4);
      expect(calculator.value).toBe(6);
    });
  });
});

// Contains AI-generated edits.
