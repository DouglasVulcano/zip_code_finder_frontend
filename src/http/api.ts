import type { ApiAdapter } from './adapters/ApiAdapter'
import { FetchAdapter } from './adapters/FetchAdapter'

// TODO: get this from env
export const BASE_URL = 'http://localhost/api'

export class ApiService {
  private adapter: ApiAdapter

  constructor(adapter: ApiAdapter) {
    this.adapter = adapter
  }

  fetchConfig(method: string, path: string, body?: object) {
    return this.adapter.request(method, path, body)
  }
}

export const apiService = new ApiService(new FetchAdapter(BASE_URL))
