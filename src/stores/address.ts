import { defineStore } from 'pinia'
import type { Address } from '@/types/Address'
import { fetchAddressByCep } from '@/http/services/addresService'

export const useAddressStore = defineStore('address', {
  state: () => {
    return { address: {} as Address, errorMessage: '' }
  },
  actions: {
    async fetchAddress(cep: string) {
      try {
        const response = await fetchAddressByCep(cep)
        if (!response.ok) {
          const errorResponse = await response.json()
          this.errorMessage = errorResponse.message
          throw new Error(`Erro na API: ${response.status} - ${response.statusText}`)
        }
        this.errorMessage = ''
        this.address = await response.json()
      } catch (error) {
        console.error('Erro ao buscar endereço:', error)
        throw error
      }
    },
  },
})
