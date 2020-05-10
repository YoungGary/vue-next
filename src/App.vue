<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <watch />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import watch from './components/watchEffect'

export default {
  name: 'App',
  components: {
    HelloWorld,watch
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
