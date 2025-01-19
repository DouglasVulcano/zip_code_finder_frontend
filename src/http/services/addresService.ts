import { apiService } from '../api'

export const fetchAddressByCep = async (cep: string) => {
  return apiService.fetchConfig('GET', `/search-address/${cep}`)
}
