export class BankAccount {
  constructor() {
    this.balance = 0
  }

  getBalance() {
    return this.balance
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Deposit amount must be positive')
    }
    this.balance += amount
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be positive')
    }
    if (amount > this.balance) {
      throw new Error('Insufficient funds')
    }
    this.balance -= amount
  }
} 