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
.cpt-toast{
  position: absolute;
  right: 0;
  left: 0;
  bottom: 40px;;
  text-align: center;
}
.success{
  font-size: 15px;
  color:white;
  padding: 10px;
  border-radius: 30px;
  background-color:  rgba(14, 13, 13, 0.6);;
}
</style>
