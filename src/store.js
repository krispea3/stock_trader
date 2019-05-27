import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './data/stocks'

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
    },
    stockPortfolio: (state, getters) => {
      return state.portfolio.map(portfolio => {
        const record = getters.stocks.find(element => element.id === portfolio.id)
        return {
          id: portfolio.id,
          quantity: portfolio.quantity,
          name: record.name,
          price: record.price
        }
      })
    }
  },
  mutations: {
    setStocks: (state, stocks) => {
      state.stocks = stocks
    },
    setPortfolio: (state, portfolio) => {
      if (portfolio) {
        // just write id and quantity in portolio
        const data = portfolio.map(item => {
          return ({ id: item.id, quantity: item.quantity })
        })
        state.portfolio = data
      } else {
        state.portfolio = []
      }
    },
    addPortfolio: (state, order) => {
      // Check if id already in portfolio
      // The constant record just holds a pointer tho the state.portfolio element when found. Updating it updates the state value
      const record = state.portfolio.find(element => element.id === order.id)
      if (record) {
        record.quantity += order.quantity
      } else {
        const portfolio = { id: order.id, quantity: order.quantity }
        state.portfolio.push(portfolio)
      }
      // Update funds
      state.funds -= order.price * order.quantity
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
    },
    randomiseStocks (state) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
      })
    }
  },
  actions: {
    initStocks: ({ commit }) => {
      commit('setStocks', stocks)
    },
    loadData: ({ commit }) => {
      Vue.axios.get('data.json')
        .then(response => {
          commit('setFunds', response.data.funds)
          commit('setStocks', response.data.stocks)
          commit('setPortfolio', response.data.stockPortfolio)
        })
        .catch(error => {
          console.log(error)
        })
    },
    addStockToPortfolio: ({ commit }, order) => {
      commit('addPortfolio', order)
    },
    sellStock: ({ commit }, stock) => {
      commit('sellStock', stock)
    },
    randomiseStocks: ({ commit }) => {
      commit('randomiseStocks')
    }
  }
})
