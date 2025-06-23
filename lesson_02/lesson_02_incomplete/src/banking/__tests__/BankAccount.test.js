import { BankAccount } from '../BankAccount'

describe('BankAccount', () => {
    it('should create an account with initial balance of 0', () => {
        const account = new BankAccount()
        expect(account.getBalance()).toBe(0)
      })
    
      it('should allow deposits and increase balance', () => {
        const account = new BankAccount()
        account.deposit(100)
        expect(account.getBalance()).toBe(100)
      })
    
      it('should allow withdrawals and decrease balance', () => {
        const account = new BankAccount()
        account.deposit(100)
        account.withdraw(50)
        expect(account.getBalance()).toBe(50)
      })
    
      it('should not allow withdrawals exceeding balance', () => {
        const account = new BankAccount()
        account.deposit(100)
        expect(() => account.withdraw(150)).toThrow('Insufficient funds')
      })
    
      it('should not allow negative deposits', () => {
        const account = new BankAccount()
        expect(() => account.deposit(-50)).toThrow('Deposit amount must be positive')
      })
    
      it('should not allow negative withdrawals', () => {
        const account = new BankAccount()
        account.deposit(100)
        expect(() => account.withdraw(-50)).toThrow('Withdrawal amount must be positive')
      })
}) 