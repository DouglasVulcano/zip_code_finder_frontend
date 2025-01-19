<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  address: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <h3>{{ address.logradouro }}</h3>
    <p>CEP: {{ address.cep }}</p>
    <p>{{ address.bairro }} - {{ address.localidade }}/{{ address.uf }}</p>
    <p v-if="address.complemento">Complemento: {{ address.complemento }}</p>
    <div class="additional-info">
      <p>Região: {{ address.regiao }}</p>
      <p>Estado: {{ address.estado }}</p>
      <p>DDD: {{ address.ddd }}</p>
    </div>
  </div>
</template>

<style scoped>
.additional-info {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}
</style>
