const { getAccountById, deposit } = require('../../api/account.service')
const repository = require('../../api/account.repository')

jest.mock('../../api/account.repository')

describe('Account Service (BDD)', () => {
  afterEach(() => jest.clearAllMocks())

  describe('getAccountById', () => {
    it('Given an existing account, When fetching by ID, Then it returns the account', async () => {
      repository.findById.mockResolvedValue({ id: '1', balance: 100 })
      const result = await getAccountById('1')
      expect(result).toEqual({ id: '1', balance: 100 })
    })

    it('Given a non-existent account, When fetching by ID, Then it returns null', async () => {
      repository.findById.mockResolvedValue(null)
      const result = await getAccountById('999')
      expect(result).toBeNull()
    })
  })

  describe('deposit', () => {
    it('Given a valid amount, When depositing, Then it updates and returns the account', async () => {
      repository.findById.mockResolvedValue({ id: '1', balance: 100 })
      repository.updateBalance.mockResolvedValue({ id: '1', balance: 200 })
      const result = await deposit('1', 100)
      expect(result).toEqual({ id: '1', balance: 200 })
    })

    it('Given an invalid amount, When depositing, Then it throws an error', async () => {
      await expect(deposit('1', -50)).rejects.toThrow('Invalid amount')
    })
  })
}) 