import { BankAccount } from '../../BankAccount'

function createMockNotificationService() {
  return {
    notify: jest.fn(),
    notifyAsync: jest.fn(),
  }
}

describe('BankAccount', () => {
  it('notifies on large withdrawal', () => {
    const mockService = createMockNotificationService()
    const account = new BankAccount(mockService)
    account.deposit(2000)
    account.withdraw(1500)
    expect(mockService.notify).toHaveBeenCalledWith('Large withdrawal detected')
  })

  it('notifies on insufficient funds', () => {
    const mockService = createMockNotificationService()
    const account = new BankAccount(mockService)
    account.deposit(100)
    expect(() => account.withdraw(200)).toThrow('Insufficient funds')
    expect(mockService.notify).toHaveBeenCalledWith('Insufficient funds for withdrawal')
  })

  it('does not notify for small withdrawal', () => {
    const mockService = createMockNotificationService()
    const account = new BankAccount(mockService)
    account.deposit(500)
    account.withdraw(100)
    expect(mockService.notify).not.toHaveBeenCalled()
  })

  it('async notifies on large withdrawal', async () => {
    const mockService = createMockNotificationService()
    const account = new BankAccount(mockService)
    account.deposit(2000)
    await account.withdrawAsync(1500)
    expect(mockService.notifyAsync).toHaveBeenCalledWith('Large withdrawal detected')
  })

  it('async notifies on insufficient funds', async () => {
    const mockService = createMockNotificationService()
    const account = new BankAccount(mockService)
    account.deposit(100)
    await expect(account.withdrawAsync(200)).rejects.toThrow('Insufficient funds')
    expect(mockService.notifyAsync).toHaveBeenCalledWith('Insufficient funds for withdrawal')
  })

  it('async does not notify for small withdrawal', async () => {
    const mockService = createMockNotificationService()
    const account = new BankAccount(mockService)
    account.deposit(500)
    await account.withdrawAsync(100)
    expect(mockService.notifyAsync).not.toHaveBeenCalled()
  })
})

describe('BankAccount', () => {
  it('should create an account with initial balance of 0', () => {
    const account = new BankAccount(null, '123')
    expect(account.getBalance()).toBe(0)
  })

  it('should allow deposits and increase balance', () => {
    const account = new BankAccount(null, '123')
    account.deposit(100)
    expect(account.getBalance()).toBe(100)
  })

  it('should allow withdrawals and decrease balance', () => {
    const account = new BankAccount(null, '123')
    account.deposit(100)
    account.withdraw(50)
    expect(account.getBalance()).toBe(50)
  })

  it('should not allow withdrawals exceeding balance', () => {
    const mockService = createMockNotificationService()
    const account = new BankAccount(mockService, '123')
    account.deposit(100)
    expect(() => account.withdraw(150)).toThrow('Insufficient funds')
  })

  it('should not allow negative deposits', () => {
    const account = new BankAccount(null, '123')
    expect(() => account.deposit(-50)).toThrow('Deposit amount must be positive')
  })

  it('should not allow negative withdrawals', () => {
    const account = new BankAccount(null, '123')
    account.deposit(100)
    expect(() => account.withdraw(-50)).toThrow('Withdrawal amount must be positive')
  })
}) 