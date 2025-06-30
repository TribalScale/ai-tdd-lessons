class BankAccount {
  constructor(initialBalance = 0) {
    if (typeof initialBalance !== 'number' || isNaN(initialBalance)) {
      throw new Error('Invalid initial balance');
    }
    this._balance = initialBalance;
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Invalid deposit amount');
    }
    this._balance += amount;
  }

  withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Invalid withdrawal amount');
    }
    if (amount > this._balance) {
      throw new Error('Insufficient funds');
    }
    this._balance -= amount;
  }
}

module.exports = BankAccount;
// Contains AI-generated edits.
