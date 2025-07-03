import { SomeBankAccount } from './SomeBankAccount'

export class BankClient {
  constructor(apiClient) {
    this.apiClient = apiClient
  }

  async getBankById(id) {
    const data = await this.apiClient.get(`/bank/${id}`)
    if (!data || !data.id) {
      throw new Error('Bank account not found')
    }
    return new SomeBankAccount(data)
  }
}
