import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funds: 10000,
    stocks: [],
    portfolio: []
  },
  getters: {
    funds: state => {
      return state.funds
    },
    stocks: state => {
      return state.stocks
    },
    portfolio: state => {
      return state.portfolio
    }
  },
  mutations: {
    setStocks: (state, stocks) => {
      state.stocks = stocks
    },
    addPortfolio: (state, portfolio) => {
      state.portfolio.push(portfolio)
    },
    setFunds: (state, newFunds) => {
      state.funds = newFunds
    },
    sellStock: (state, stock) => {
      const record = state.portfolio.find(element => element.id === stock.id)
      if (record) {
        if (record.quantity <= stock.quantity) {
          state.portfolio.splice(state.portfolio.indexOf(record), 1)
        } else {
          record.quantity -= stock.quantity
        }
      }
      state.funds += stock.price * stock.quantity
    }
  },
  actions: {
    initStocks: ({ commit }, stocks) => {
      commit('setStocks', stocks)
    },
    addStockToPortfolio: (context, portfolio) => {
      // Check if id already in portfolio
      // The constant record just holds a pointer tho the state.portfolio element when found. Updating it updates the state value
      const record = context.state.portfolio.find(element => element.id === portfolio.id)
      if (record) {
        record.quantity += portfolio.quantity
      } else {
        context.commit('addPortfolio', portfolio)
      }
      // Update funds
      const value = portfolio.price * portfolio.quantity
      const newFunds = context.state.funds - value
      context.commit('setFunds', newFunds)
    },
    sellStock: ({ commit }, stock) => {
      commit('sellStock', stock)
    }
  }
})
