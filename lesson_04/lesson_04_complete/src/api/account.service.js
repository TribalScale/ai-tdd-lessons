const repository = require('./account.repository')

async function getAccountById(id) {
  return repository.findById(id)
}

async function deposit(id, amount) {
  if (typeof amount !== 'number' || amount <= 0) throw new Error('Invalid amount')
  const account = await repository.findById(id)
  if (!account) throw new Error('Account not found')
  return repository.updateBalance(id, account.balance + amount)
}

module.exports = { getAccountById, deposit } 