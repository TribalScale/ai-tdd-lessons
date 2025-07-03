import { BankingService } from '../../BankingService'
import { BankAccount } from '../../BankAccount'

jest.mock('../../BankAccount')

describe('BankingService', () => {
  let bankingService
  let mockBankAccount

  beforeEach(() => {

    jest.clearAllMocks()
    
    bankingService = new BankingService()

    mockBankAccount = {
      deposit: jest.fn(),
      withdraw: jest.fn(),
      getBalance: jest.fn(),
      getId: jest.fn()
    }
    
    BankAccount.mockImplementation(() => mockBankAccount)

    jest.spyOn(mockBankAccount, 'getId').mockImplementation(() => '123');
  })

  it('should create a new account', () => {
    const accountId = '123'
    bankingService.createAccount(accountId)
    
    expect(accountId).toBe(mockBankAccount.getId())
  })

  it('should not allow creating duplicate accounts', () => {
    const accountId = '123'
    bankingService.createAccount(accountId)
    
    expect(() => bankingService.createAccount(accountId))
      .toThrow('Account already exists')
  })

  it('should handle deposits through the service', () => {
    const accountId = '123'
    bankingService.createAccount(accountId)
    
    bankingService.deposit(accountId, 100)
    expect(mockBankAccount.deposit).toHaveBeenCalledWith(100)
  })

  it('should handle withdrawals through the service', () => {
    const accountId = '123'
    bankingService.createAccount(accountId)
    
    bankingService.withdraw(accountId, 50)
    expect(mockBankAccount.withdraw).toHaveBeenCalledWith(50)
  })

  it('should get balance through the service', () => {
    const accountId = '123'
    const expectedBalance = 1000
    mockBankAccount.getBalance.mockReturnValue(expectedBalance)
    
    bankingService.createAccount(accountId)
    const balance = bankingService.getBalance(accountId)
    
    expect(mockBankAccount.getBalance).toHaveBeenCalled()
    expect(balance).toBe(expectedBalance)
  })

  it('should throw error when accessing non-existent account', () => {
    expect(() => bankingService.getAccount('non-existent'))
      .toThrow('Account not found')
  })
}) 