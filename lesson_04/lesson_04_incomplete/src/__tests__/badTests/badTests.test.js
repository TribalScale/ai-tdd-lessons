// Examples of bad tests for discussion purposes
// Each test is followed by a comment explaining why it is a bad test.

import { BankingService } from '../../BankingService'
import { BankAccount } from '../../BankAccount'

jest.mock('../../BankAccount')

describe('Bad Test Examples for BankingService', () => {
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
    jest.spyOn(mockBankAccount, 'getId').mockImplementation(() => '123')
  })

  it('should do everything correctly', () => {
    const accountId = '123'
    bankingService.createAccount(accountId)
    bankingService.deposit(accountId, 100)
    bankingService.withdraw(accountId, 50)
    const balance = bankingService.getBalance(accountId)
    expect(balance).toBe(50)
    expect(() => bankingService.createAccount(accountId)).toThrow()
    expect(() => bankingService.getAccount('non-existent')).toThrow()
  })

  it('should call deposit method directly on BankAccount', () => {
    const accountId = '123'
    bankingService.createAccount(accountId)
    bankingService.deposit(accountId, 100)
    
    expect(mockBankAccount.deposit.mock.calls.length).toBe(1)
  })

  let sharedState = 0
  it('should increment shared state', () => {
    sharedState++
    expect(sharedState).toBe(1)
  })
  it('should expect shared state to be 2', () => {
    sharedState++
    expect(sharedState).toBe(2)
  })

  it('should not throw when depositing', () => {
    const accountId = '123'
    bankingService.createAccount(accountId)
    expect(() => bankingService.deposit(accountId, 100)).not.toThrow()
  })

  it('should return a value', () => {
    const accountId = '123'
    bankingService.createAccount(accountId)
    const balance = bankingService.getBalance(accountId)
    expect(balance).toBeDefined()
  })
  
  it('should always return mocked balance', () => {
    const accountId = '123'
    mockBankAccount.getBalance.mockReturnValue(9999)
    bankingService.createAccount(accountId)
    const balance = bankingService.getBalance(accountId)
    expect(balance).toBe(9999)
  })
})
