import { BankAccount } from './BankAccount'

const createMockNotificationService = () => ({
  notify: jest.fn(),
  notifyAsync: jest.fn().mockResolvedValue(undefined),
})

describe('BankAccount with NotificationService', () => {
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