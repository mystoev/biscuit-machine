import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true

window.eventHub = new Vue()
new Vue({
  render: h => h(App),
}).$mount('#app')


//Shown burnt biscuits, when paused
//maybe add general css rules?