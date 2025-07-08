import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      this.denied = true;
      return;
    }
    this.balance -= amount;
    this.denied = false;
  }
}

let account;

Given('I have a bank account with a balance of {int}', function (balance) {
  account = new BankAccount(balance);
});

When('I deposit {int}', function (amount) {
  account.deposit(amount);
});

When('I withdraw {int}', function (amount) {
  account.withdraw(amount);
});

Then('the balance should be {int}', function (expected) {
  assert.strictEqual(account.balance, expected);
});

Then('the withdrawal should be denied', function () {
  assert.strictEqual(account.denied, true);
});

// Contains AI-generated edits.
