/* eslint-disable */
export default class ApiService {
  apiBase = 'https://aviasales-test-api.kata.academy'
  apiKey = ''

  async getTickets() {
    if (!this.apiKey) {
      const res = await fetch(`${this.apiBase}/search`)
      if (!res.ok) {
        throw new Error(`Could not fetch search id, received ${res.status}`)
      }
      const data = await res.json()
      this.apiKey = data.searchId
    }

    const MAX_RETRIES = 5
    let retries = 0

    while (retries < MAX_RETRIES) {
      const res = await fetch(`${this.apiBase}/tickets?searchId=${this.apiKey}`)
      if (res.ok) {
        return await res.json()
      } else if (res.status === 500) {
        retries++
      } else {
        throw new Error(`Could not fetch get tickets, received ${res.status}`)
      }
    }
    throw new Error(`Could not fetch get tickets, exceeded maximum number of retries`)
  }
}
