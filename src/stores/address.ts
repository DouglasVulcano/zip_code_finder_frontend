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
        if ('ok' in response && !response.ok) this.errorMessage = response.message
        else {
          this.errorMessage = ''
          this.address = response
        }
      } catch (error) {
        console.error('Erro ao buscar endereço:', error)
        throw error
      }
    },
  },
})
