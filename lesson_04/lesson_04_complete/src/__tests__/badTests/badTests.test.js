// Examples of bad tests for discussion purposes
// Each test is followed by a comment explaining why it is a bad test.

import { BankingService } from '../../BankingService'
import { BankAccount } from '../../BankAccount'

jest.mock('../../BankAccount')


describe('Bad Test Examples', () => {
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

  // Example 1: Overly Broad Test (Testing Too Much at Once)
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
  // BAD: This test checks multiple behaviors at once. If it fails, it's unclear which part is broken. Good tests should focus on one behavior at a time.

  // Example 2: Asserting Implementation Details (Not Behavior)
  it('should call deposit method directly on BankAccount', () => {
    const accountId = '123'
    bankingService.createAccount(accountId)
    bankingService.deposit(accountId, 100)
    // Directly checking the mock, not the observable behavior
    expect(mockBankAccount.deposit.mock.calls.length).toBe(1)
  })
  // BAD: This test checks how the method is implemented, not what the user would observe. Tests should focus on observable outcomes, not internal details.

  // Example 3: Test That Relies on Order of Test Execution
  let sharedState = 0
  it('should increment shared state', () => {
    sharedState++
    expect(sharedState).toBe(1)
  })
  it('should expect shared state to be 2', () => {
    sharedState++
    expect(sharedState).toBe(2)
  })
  // BAD: These tests depend on each other and the order they run. Tests should be isolated and not share mutable state.

  // Example 4: Test That Only Checks for No Error (But Should Check Output)
  it('should not throw when depositing', () => {
    const accountId = '123'
    bankingService.createAccount(accountId)
    expect(() => bankingService.deposit(accountId, 100)).not.toThrow()
    // No check that deposit actually worked!
  })
  // BAD: This test only checks that no error is thrown, but doesn't verify the result or side effect. It may miss silent failures.

  // Example 5: Test With Overly Generic Assertion
  it('should return a value', () => {
    const accountId = '123'
    bankingService.createAccount(accountId)
    const balance = bankingService.getBalance(accountId)
    expect(balance).toBeDefined()
  })
  // BAD: This test passes as long as anything is returned, even if it's wrong. Assertions should be specific to the expected behavior.

  // Example 6: Test That Passes Due to Mock Setup, Not Real Logic
  it('should always return mocked balance', () => {
    const accountId = '123'
    mockBankAccount.getBalance.mockReturnValue(9999)
    bankingService.createAccount(accountId)
    const balance = bankingService.getBalance(accountId)
    expect(balance).toBe(9999)
  })
  // BAD: This test only verifies the mock, not the actual logic of the service. It can give a false sense of correctness if the real implementation is broken.
})
