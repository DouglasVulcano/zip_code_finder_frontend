<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
  width: 600px;
  margin: 0 auto;
  text-align: center;
}

@media (max-width: 600px) {
  .container {
    width: 90%;
  }
}
</style>
