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

    const client = new BankClient(mockAPIClient)

    // Act
    const result = await client.getBankById('abc')

    expect(result.id).toBe('abc')
  })

  it('should throw an error if API returns null', async () => {
    const mockAPIClient = {
      get: jest.fn().mockResolvedValue(null)
    }
    const client = new BankClient(mockAPIClient)
    await expect(client.getBankById('abc')).rejects.toThrow('Bank account not found')
  })

  it('should throw an error if API returns object without id', async () => {
    const mockAPIClient = {
      get: jest.fn().mockResolvedValue({})
    }
    const client = new BankClient(mockAPIClient)
    await expect(client.getBankById('abc')).rejects.toThrow('Bank account not found')
  })
})
// Contains AI-generated edits.
