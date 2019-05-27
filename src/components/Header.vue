<template>
    <div class="mt-4 mb-4">
        <b-navbar toggleable="lg" type="light" variant="light" class="rounded">
            <b-navbar-brand to="/">Stock Trader</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/portfolio">Portfolio</b-nav-item>
                <b-nav-item to="/stocks">Stocks</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item @click="endDay" href="#">End Day</b-nav-item>

                <b-nav-item-dropdown text="Save & Load" right class="mr-2">
                    <b-dropdown-item @click="saveData" href="#">Save</b-dropdown-item>
                    <b-dropdown-item @click="loadData" href="#">Load</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-text><strong>Funds: {{ funds | currency }}</strong></b-nav-text>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    endDay () {
      this.$store.dispatch('randomiseStocks')
    },
    loadData () {
      this.$store.dispatch('loadData')
    },
    saveData () {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      this.axios.put('data.json', data)
        .then(response => {
          alert('Data saved!')
        })
        .catch(error => {
          alert('Ooops something went wrong, please try again later')
          console.log(error)
        })
    }
  }
}

</script>
