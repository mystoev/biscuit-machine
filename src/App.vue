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
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      margin-top: 60px;
  }

  .svg-common {
      width: 100px;
      height: 100px;
  }
</style>
