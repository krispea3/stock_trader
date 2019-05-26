import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://stocktrader-869d0.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
