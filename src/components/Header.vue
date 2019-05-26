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
                    <b-dropdown-item href="#">Save</b-dropdown-item>
                    <b-dropdown-item href="#">Load</b-dropdown-item>
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
      alert('Ended day!')
    }
  }
}

</script>
