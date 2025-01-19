import type { ApiAdapterInterface } from './ApiAdapterInterface'

export class FetchAdapter implements ApiAdapterInterface {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async request(method: string, path: string, body?: object): Promise<Response> {
    const config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    }

    return fetch(`${this.baseUrl}${path}`, config)
  }
}
