<script setup lang="ts">
import { RouterView } from 'vue-router'
import ContainerComponent from './components/ContainerComponent.vue'
</script>

<template>
  <ContainerComponent>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Buscar Endereço</router-link>
    </nav>
    <RouterView />
  </ContainerComponent>
</template>

<style scoped>
nav {
  padding: 2rem;
  text-align: center;
}

nav a {
  margin: 0 1rem;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-active {
  color: #42b883;
}
</style>
