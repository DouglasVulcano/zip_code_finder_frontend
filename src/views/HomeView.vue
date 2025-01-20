<script setup lang="ts">
import NavigateBtnComponent from '../components/NavigateBtnComponent.vue'
</script>

<template>
  <div class="home">
    <img src="/zipcode_finder.png" alt="Logo" class="logo" />
    <div>
      <h1>Bem-vindo ao Zip Code Finder</h1>
      <p class="description">
        Esta aplicação permite que você busque informações detalhadas de endereços através do CEP.
        Utilize nossa ferramenta de busca para encontrar rapidamente as informações que você
        precisa.
      </p>
      <NavigateBtnComponent label="Ir para Busca" to="/search" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 180px;
  padding: 20px;
}

.description {
  margin-top: 10px;
  font-size: 14px;
  text-align: justify;
}
</style>
