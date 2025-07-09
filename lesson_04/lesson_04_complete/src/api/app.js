const express = require('express')
const { getAccountById, deposit } = require('./account.service')
const app = express()
app.use(express.json())

app.get('/accounts/:id', async (req, res) => {
  try {
    const account = await getAccountById(req.params.id)
    if (!account) return res.status(404).json({ error: 'Account not found' })
    res.json(account)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.post('/accounts/:id/deposit', async (req, res) => {
  try {
    const account = await deposit(req.params.id, req.body.amount)
    res.json(account)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

module.exports = { app } 