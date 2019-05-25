<template>
  <div class="container">
    <div class="row">
      <div class="col sm mx-auto">
            <app-header></app-header>
            <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    'appHeader': Header
  }
}
</script>
