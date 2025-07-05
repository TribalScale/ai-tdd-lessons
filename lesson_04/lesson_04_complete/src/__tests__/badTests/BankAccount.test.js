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
})