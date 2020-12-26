<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted () {
    // this.getUser()
    // this.getCartCount()
  },
  methods: {
    getUser () {
      this.$http.get('/user').then(() => {
        // to-do 保存在vuex中
      })
    },
    getCartCount () {
      this.$http.get('/carts/products/sum').then(() => {
        // to-do 保存在vuex中
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
