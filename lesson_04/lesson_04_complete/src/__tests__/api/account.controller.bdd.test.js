global.TextEncoder = require('util').TextEncoder
const request = require('supertest')
const { app } = require('../../api/app')
jest.mock('../../api/account.service')
const accountService = require('../../api/account.service')

describe('Account Controller (BDD)', () => {
  afterEach(() => jest.clearAllMocks())

  describe('GET /accounts/:id', () => {
    it('Given an existing account, When requesting the account, Then it returns 200 and the account data', async () => {
      accountService.getAccountById.mockResolvedValue({ id: '1', balance: 100 })
      const res = await request(app).get('/accounts/1')
      expect(res.status).toBe(200)
      expect(res.body).toEqual({ id: '1', balance: 100 })
    })

    it('Given a non-existent account, When requesting the account, Then it returns 404', async () => {
      accountService.getAccountById.mockResolvedValue(null)
      const res = await request(app).get('/accounts/999')
      expect(res.status).toBe(404)
      expect(res.body).toEqual({ error: 'Account not found' })
    })
  })

  describe('POST /accounts/:id/deposit', () => {
    it('Given a valid deposit, When depositing, Then it returns 200 and the new balance', async () => {
      accountService.deposit.mockResolvedValue({ id: '1', balance: 200 })
      const res = await request(app).post('/accounts/1/deposit').send({ amount: 100 })
      expect(res.status).toBe(200)
      expect(res.body).toEqual({ id: '1', balance: 200 })
    })

    it('Given an invalid deposit, When depositing, Then it returns 400', async () => {
      accountService.deposit.mockImplementation(() => { throw new Error('Invalid amount') })
      const res = await request(app).post('/accounts/1/deposit').send({ amount: -50 })
      expect(res.status).toBe(400)
      expect(res.body).toEqual({ error: 'Invalid amount' })
    })
  })
}) 