import { NotificationService } from './NotificationService'

export class BankAccount {
  constructor(notificationService = new NotificationService()) {
    this.balance = 0
    this.notificationService = notificationService
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
      await this.notificationService.notifyAsync('Insufficient funds for withdrawal')
      throw new Error('Insufficient funds')
    }
    if (amount >= 1000) {
      await this.notificationService.notifyAsync('Large withdrawal detected')
    }
    this.balance -= amount
  }
} 