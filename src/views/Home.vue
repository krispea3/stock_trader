<template>
  <div>
    <h1>Trade or view your portfolio(test)</h1>
    <small>You may save or load your data</small>
    <br>
    <small>Click on 'End Day' to beginn a new day!</small>
    <hr>
    <p>Your funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  }
}
</script>
