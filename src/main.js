import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/element'
import axios from './utils/axios'

Vue.prototype.$axiso = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
