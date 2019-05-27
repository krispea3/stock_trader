import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

axios.defaults.baseURL = 'https://stocktrader-869d0.firebaseio.com/'
axios.defaults.mode = 'no-cors'
axios.default.headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
axios.default.withCredentials = true

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
