const BankAccount = require('../src/BankAccount');

describe('BankAccount', () => {
  it('should initialize with a balance', () => {
    const account = new BankAccount(100);
    expect(account.getBalance()).toBe(100);
  });

  it('should deposit money', () => {
    const account = new BankAccount(50);
    account.deposit(30);
    expect(account.getBalance()).toBe(80);
  });

  it('should withdraw money', () => {
    const account = new BankAccount(100);
    account.withdraw(40);
    expect(account.getBalance()).toBe(60);
  });

  it('should not allow withdrawal beyond balance', () => {
    const account = new BankAccount(20);
    expect(() => account.withdraw(50)).toThrow('Insufficient funds');
  });

  it('should not allow negative deposits', () => {
    const account = new BankAccount(10);
    expect(() => account.deposit(-5)).toThrow('Invalid deposit amount');
  });

  it('should not allow negative withdrawals', () => {
    const account = new BankAccount(10);
    expect(() => account.withdraw(-5)).toThrow('Invalid withdrawal amount');
  });
});
