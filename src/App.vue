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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.component-root {
  display: inline-block;
}
</style>
