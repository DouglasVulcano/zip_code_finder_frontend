<script setup lang="ts">
import NavigateBtnComponent from '../components/NavigateBtnComponent.vue'
import AddressComponent from '../components/AddressComponent.vue'
import { useAddressStore } from '../stores/address'
import { MaskInput } from 'vue-3-mask'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useAddressStore()
const { address, errorMessage } = storeToRefs(store)

const cep = ref('')
const loading = ref(false)

const handleSearch = async () => {
  if (!cep.value) {
    errorMessage.value = 'CEP obrigatório.'
    return
  }

  loading.value = true
  try {
    await store.fetchAddress(cep.value)
  } finally {
    cep.value = ''
    loading.value = false
  }
}
</script>

<template>
  <div class="search-page">
    <h1>Buscar Endereço</h1>

    <div class="search-form">
      <MaskInput
        v-model="cep"
        mask="#####-###"
        type="text"
        placeholder="Digite o CEP"
        maxlength="9"
        :disabled="loading"
      />
      <button @click="handleSearch" :disabled="loading">
        {{ loading ? 'Buscando...' : 'Buscar' }}
      </button>
    </div>

    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>

    <div v-if="Object.values(address).length">
      <div style="text-align: left; margin-bottom: 20px">
        <h3>Última pesquisa:</h3>
      </div>
      <AddressComponent :address="address" />
    </div>

    <NavigateBtnComponent label="Ir para Home" to="/" />
  </div>
</template>

<style scoped>
.search-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.search-page h1 {
  margin-bottom: 20px;
}

.search-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  padding: 0.8rem 1.6rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:disabled {
  background-color: #a8d5c2;
  cursor: not-allowed;
}

.error-message {
  background-color: #fee2e2;
  color: #dc2626;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 20px;
}

.home-btn {
  display: inline-block;
  margin-top: 40px;
  padding: 10px 20px;
  background-color: #42b883;
  color: #fff;
  text-decoration: none;
  border-radius: 15px;
  text-transform: uppercase;
}
</style>
