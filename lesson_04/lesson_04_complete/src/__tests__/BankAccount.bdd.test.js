// bankAccount.test.js
import BankAccount from '../BankAccount';

describe('BankAccount', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount(undefined, 'abc');
  });

  describe('when a new account is created', () => {
    it('should have a balance of 0', () => {
      expect(account.getBalance()).toBe(0);
    });
  });

  describe('when money is deposited', () => {
    beforeEach(() => {
      account.deposit(100);
    });

    it('should increase the balance accordingly', () => {
      expect(account.getBalance()).toBe(100);
    });
  });

  describe('when money is withdrawn', () => {
    beforeEach(() => {
      account.deposit(100);
      account.withdraw(40);
    });

    it('should decrease the balance accordingly', () => {
      expect(account.getBalance()).toBe(60);
    });
  });

  describe('when withdrawing more than the balance', () => {
    it('should throw an error', () => {
      expect(() => account.withdraw(50)).toThrow('Insufficient funds');
    });
  });
});
