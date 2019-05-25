<template>
    <b-row>
        <app-stock v-for = 'stock in stocks' :key='stock.id' :stock='stock'></app-stock>
    </b-row>
</template>

<script>
import stocks from '../data/stocks'
import Stock from '../components/Stock'

export default {
  components: {
    'appStock': Stock
  },
  created () {
    this.$store.dispatch('initStocks', stocks)
  },
  computed: {
    stocks () {
      return this.$store.getters.stocks
    }
  }
}
</script>
