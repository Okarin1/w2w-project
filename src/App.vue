<template>
  <div id="app">
      <words/>
  </div>
</template>

<script>
import Words from './components/Words.vue'

export default {
  name: 'App',
  components: {
    Words
  }
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
