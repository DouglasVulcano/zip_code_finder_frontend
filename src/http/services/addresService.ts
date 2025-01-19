import { apiService } from '../api'

export const fetchAddressByCep = async (cep: string) => {
  return await apiService.fetchConfig('GET', `/search-address/${cep}`)
}
