import type { ApiAdapterInterface } from './adapters/ApiAdapterInterface'
import { FetchAdapter } from './adapters/FetchAdapter'

// TODO: get this from env
export const BASE_URL = 'http://localhost/api'

export class ApiService {
  private adapter: ApiAdapterInterface

  constructor(adapter: ApiAdapterInterface) {
    this.adapter = adapter
  }

  async fetchConfig(method: string, path: string, body?: object) {
    const response = await this.adapter.request(method, path, body)
    const responseData = await response.json()
    /**
     * TODO: Se for implementar um sistema de notificações global,
     * deve ser feito aqui
     */
    if (!response.ok) {
      return {
        ok: false,
        message: responseData.message,
      }
    }
    return responseData
  }
}

export const apiService = new ApiService(new FetchAdapter(BASE_URL))
