// In-memory DB for demo
const db = { '1': { id: '1', balance: 100 } }

async function findById(id, customDb = db) {
  return customDb[id] || null
}

async function updateBalance(id, newBalance, customDb = db) {
  if (!customDb[id]) throw new Error('Account not found')
  customDb[id].balance = newBalance
  return customDb[id]
}

module.exports = { findById, updateBalance } 