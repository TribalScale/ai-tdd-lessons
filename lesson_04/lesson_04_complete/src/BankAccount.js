import { NotificationService } from './NotificationService'

class BankAccount {
  constructor(notificationService = new NotificationService(), id) {
    this.balance = 0
    this.notificationService = notificationService
    this.id = id
  }

  getId() {
    return this.id
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
      this.notificationService.notify('Insufficient funds for withdrawal')
      throw new Error('Insufficient funds')
    }
    if (amount >= 1000) {
      this.notificationService.notify('Large withdrawal detected')
    }
    this.balance -= amount
  }

  async withdrawAsync(amount) {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be positive')
    }
    if (amount > this.balance) {
      this.notificationService.notify('Insufficient funds for withdrawal')
      throw new Error('Insufficient funds')
    }
    this.balance -= amount
    return this.balance
  }
}

export default BankAccount