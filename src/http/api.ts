import type { ApiAdapterInterface } from './adapters/ApiAdapterInterface'
import { FetchAdapter } from './adapters/FetchAdapter'

// TODO: get this from env
export const BASE_URL = 'http://localhost/api'

export class ApiService {
  private adapter: ApiAdapterInterface

  constructor(adapter: ApiAdapterInterface) {
    this.adapter = adapter
  }

  fetchConfig(method: string, path: string, body?: object) {
    return this.adapter.request(method, path, body)
  }
}

export const apiService = new ApiService(new FetchAdapter(BASE_URL))
