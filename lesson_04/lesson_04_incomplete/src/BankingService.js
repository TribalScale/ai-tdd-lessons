import { BankAccount } from './BankAccount'

export class BankingService {
  constructor() {
    this.accounts = new Map()
  }

  createAccount(accountId) {
    if (this.accounts.has(accountId)) {
      throw new Error('Account already exists')
    }
    this.accounts.set(accountId, new BankAccount())
    return accountId
  }

  getAccount(accountId) {
    if (!this.accounts.has(accountId)) {
      throw new Error('Account not found')
    }
    return this.accounts.get(accountId)
  }

  deposit(accountId, amount) {
    const account = this.getAccount(accountId)
    account.deposit(amount)
  }

  withdraw(accountId, amount) {
    const account = this.getAccount(accountId)
    account.withdraw(amount)
  }

  getBalance(accountId) {
    const account = this.getAccount(accountId)
    return account.getBalance()
  }
} 