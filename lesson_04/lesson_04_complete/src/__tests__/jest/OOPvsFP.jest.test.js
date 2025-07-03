// OOP style
class Counter {
  constructor() {
    this.value = 0;
  }
  increment() {
    this.value++;
  }
  getValue() {
    return this.value;
  }
}

describe('OOP Counter', () => {
  it('increments value', () => {
    const counter = new Counter();
    counter.increment();
    expect(counter.getValue()).toBe(1);
  });
});

// Functional style
function increment(value) {
  return value + 1;
}

describe('Functional increment', () => {
  it('returns incremented value', () => {
    const value = 0;
    const newValue = increment(value);
    expect(newValue).toBe(1);
    // original value is unchanged
    expect(value).toBe(0);
  });
});
