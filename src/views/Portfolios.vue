<template>
    <b-row>
      <app-portfolio v-for = "portfolio in getPortfolio" :key="portfolio.id" :portfolio="portfolio"></app-portfolio>
    </b-row>
</template>

<script>
import Portfolio from '../components/Portfolio'

export default {
  components: {
    'appPortfolio': Portfolio
  },
  computed: {
    getPortfolio () {
      return this.$store.getters.portfolio
    }
  }
}
</script>
