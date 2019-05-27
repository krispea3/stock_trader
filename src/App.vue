<template>
  <b-container>
    <b-row>
      <b-col>
            <app-header></app-header>
            <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    'appHeader': Header
  },
  created () {
    this.$store.dispatch('initStocks')
  }
}
</script>
