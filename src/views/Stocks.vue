<template>
    <b-row>
        <app-stock v-for = 'stock in stocks' :key='stock.id' :stock='stock'></app-stock>
    </b-row>
</template>

<script>
import Stock from '../components/Stock'

export default {
  components: {
    'appStock': Stock
  },
  computed: {
    stocks () {
      return this.$store.getters.stocks
    }
  }
}
</script>
