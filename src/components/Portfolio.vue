<template>
    <b-col sm="12" md="6" xl="4" class="mb-3">
        <b-card-group deck>
          <b-card
            border-variant="grey"
            :header="cardHeader"
            header-bg-variant="primary"
            header-text-variant="white"
            align="left"
          >
            <b-card-text align="left">
              <input v-model="quantity" type="number" placeholder="Quantity">
              <b-button @click="sellStock" href="#" variant="primary" class="ml-3">Sell</b-button>

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
  props: ['portfolio'],
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
  computed: {
    cardHeader () {
      return this.portfolio.name + '  (Price: $' + this.portfolio.price.toString() + ' | Quantity: ' + this.portfolio.quantity + ')'
    }
  },
  methods: {
    sellStock () {
      if (this.portfolio.quantity < parseInt(this.quantity, 10)) {
        this.alert = 'You cannot sell more stocks than you have'
        this.alertVariant = 'danger'
        this.showDismissibleAlert = true
        this.dismissCountDown = 2
      } else {
        const stock = { ...this.portfolio, quantity: parseInt(this.quantity, 10) }
        this.$store.dispatch('sellStock', stock)
        this.quantity = null
        this.alert = 'Stock sold!'
        this.alertVariant = 'success'
        this.showDismissibleAlert = true
        this.dismissCountDown = 2
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
