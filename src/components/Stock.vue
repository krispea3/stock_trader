<template>
    <b-col sm="12" md="6" xl="4" class="mb-3">
        <b-card-group deck>
          <b-card
            border-variant="sucess"
            :header="cardHeader"
            header-bg-variant="success"
            header-text-variant="white"
            align="left"
          >
            <b-card-text align="left">
              <input v-model="quantity" type="number" placeholder="Quantity">
              <b-button @click="buyStock" href="#" variant="success" class="ml-3">Buy</b-button>
              <!-- alerts -->
              <b-alert
                      class="mt-3"
                      :show="dismissCountDown"
                      dismissible
                      :variant="alertVariant"
                      @dismissed="dismissCountDown=0"
                      @dismiss-count-down="countDownChanged">
                      {{ alert }}
              </b-alert>
            </b-card-text>
          </b-card>
        </b-card-group>
    </b-col>

</template>

<script>
export default {
  data () {
    return {
      quantity: null,
      alert: null,
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      alertVariant: null
    }
  },
  props: ['stock'],
  computed: {
    cardHeader () {
      return this.stock.name + '  (Price: $' + this.stock.price.toString() + ')'
    }
  },
  methods: {
    buyStock () {
      if (this.quantity < 1) {
        this.alert = 'You must buy at least 1 stock'
        this.alertVariant = 'danger'
        this.showDismissibleAlert = true
        this.dismissCountDown = 2
      } else {
        if (this.stock.price * this.quantity > this.$store.getters.funds) {
          this.alert = 'Insufisant funds!'
          this.alertVariant = 'danger'
          this.showDismissibleAlert = true
          this.dismissCountDown = 2
        } else {
          const portfolio = { ...this.stock, quantity: parseInt(this.quantity, 10) }
          this.$store.dispatch('addStockToPortfolio', portfolio)
          this.quantity = null
          this.alert = 'Stock added to portfolio!'
          this.alertVariant = 'success'
          this.showDismissibleAlert = true
          this.dismissCountDown = 2
        }
      }
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style scoped>
  .cardTitle {
    background-color: lightgreen;
  }
</style>
