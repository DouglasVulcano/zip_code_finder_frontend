<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <router-link :to="to" class="btn"> {{ label }} </router-link>
  </div>
</template>

<style scoped>
.btn {
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
