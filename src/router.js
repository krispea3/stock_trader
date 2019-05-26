import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Portfolios from './views/Portfolios.vue'
import Stocks from './views/Stocks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolios
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: Stocks
    }

  ]
})
