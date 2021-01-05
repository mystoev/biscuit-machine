<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/vue-logo.png">
    <Conveyor cname="Some conveyor" />
  </div>
</template>

<script>
import Conveyor from './components/Conveyor'

export default {
  name: 'App',
  components: {
    Conveyor
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
