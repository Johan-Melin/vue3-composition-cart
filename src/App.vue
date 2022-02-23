<template>
  <div class="home">
    <Store />
    <Cart />
  </div>
</template>

<script>
import Store from './components/Store.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'App',
  components: {
    Store,
    Cart
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
