<template>
  <div id="app">
    <BiscuitMachine />
  </div>
</template>

<script>
import BiscuitMachine from './components/BiscuitMachine'

export default {
  name: 'App',
  components: {
    BiscuitMachine
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
