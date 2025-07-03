/* global jest */
// jest is provided by the test runner environment
// eslint-disable-next-line no-undef

import { BankClient } from '../../BankClient'
import { SomeBankAccount } from '../../SomeBankAccount'

describe('BankClient', () => {
  it('should fetch bank account by id and return a SomeBankAccount object', async () => {
    // Arrange: mock APIClient
    const mockApiResponse = { id: 'abc' }
    const mockAPIClient = {
      get: jest.fn().mockResolvedValue(mockApiResponse)
    }
    // Optionally, mock SomeBankAccount if needed
    // const mockSomeBankAccount = { ...mockApiResponse }
    // jest.spyOn(SomeBankAccount.prototype, 'constructor').mockImplementation(() => mockSomeBankAccount)

    const client = new BankClient(mockAPIClient)

    // Act
    const result = await client.getBankById('abc')

    expect(result.id).toBe('abc')
  })
})
// Contains AI-generated edits.
