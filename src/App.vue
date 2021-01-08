<template>
  <div id="app">
    <BiscuitMachine />
    <Requirements />
  </div>
</template>

<script>
import BiscuitMachine from './components/BiscuitMachine'
import Requirements from './components/Requirements'

export default {
  name: 'App',
  components: {
    BiscuitMachine,
    Requirements
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
