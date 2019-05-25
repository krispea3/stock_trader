import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funds: 10000,
    stocks: []
  },
  getters: {
    funds: state => {
      return state.funds
    },
    stocks: state => {
      return state.stocks
    }
  },
  mutations: {
    setStocks: (state, stocks) => {
      state.stocks = stocks
    }
  },
  actions: {
    initStocks: ({ commit }, stocks) => {
      commit('setStocks', stocks)
    }
  }
})
