import { BankingService } from '../../BankingService'
import { BankAccount } from '../../BankAccount'

jest.mock('../../../BankAccount')

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

}) 