import { SomeBankAccount } from './SomeBankAccount'

export class BankClient {
  constructor(apiClient) {
    this.apiClient = apiClient
  }

  async getBankById(id) {
    const data = await this.apiClient.get(`/bank/${id}`)
    return new SomeBankAccount(data)
  }
}
// Contains AI-generated edits.
