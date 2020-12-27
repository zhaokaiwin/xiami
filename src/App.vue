<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  mounted () {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    ...mapActions(['saveUserName']),
    getUser () {
      this.$http.get('/user').then((res) => {
        // to-do 保存在vuex中
        // this.$store.dispatch('saveUserName', res.username)
        this.saveUserName(res.username)
      })
    },
    getCartCount () {
      this.$http.get('/carts/products/sum').then((res) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>
<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/btn.scss';
</style>
