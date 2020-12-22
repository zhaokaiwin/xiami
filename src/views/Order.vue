<template>
  <div class="wrapper">
    <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
export default {
  components: {
    OrderHeader: () => import('../components/OrderHeader'),
    NavFooter
  },
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
</style>