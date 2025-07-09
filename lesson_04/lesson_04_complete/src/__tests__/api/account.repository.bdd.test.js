const { findById, updateBalance } = require('../../api/account.repository')

describe('Account Repository (BDD)', () => {
  let db

  beforeEach(() => {
    db = { '1': { id: '1', balance: 100 } }
  })

  it('Given an existing account, When finding by ID, Then it returns the account', async () => {
    expect(await findById('1', db)).toEqual({ id: '1', balance: 100 })
  })

  it('Given a non-existent account, When finding by ID, Then it returns null', async () => {
    expect(await findById('999', db)).toBeNull()
  })

  it('Given a valid update, When updating balance, Then it updates and returns the account', async () => {
    expect(await updateBalance('1', 200, db)).toEqual({ id: '1', balance: 200 })
    expect(db['1'].balance).toBe(200)
  })
}) 