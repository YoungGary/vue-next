<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <watch />
    <ref/>
    <h1>hooks:{{data.count}}</h1>
    <button @click="add">add hooks</button>
    <br>
    <parent />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import watch from './components/watchEffect'
import ref  from  './components/ref'
import useCounter from './hooks/userCounter'
import parent from './components/parent'
export default {
  name: 'App',
  components: {
    HelloWorld,watch,ref,parent
  },
  setup(){
    const {data,add} = useCounter();
    return {
      data,add
    }
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
