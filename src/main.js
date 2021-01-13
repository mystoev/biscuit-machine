import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.eventHub = new Vue()
new Vue({
  render: h => h(App),
}).$mount('#app')


//Hide initial biscuit
//Shown burnt biscuits, when paused
//Improve switch visual style - curve the top edges
//Improve switch functionality - be able to pull leaver; highlight the state
//Turn the oven initial temp back to 20 