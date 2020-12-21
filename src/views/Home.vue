<template>
  <div class="wrapper">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
import NavHeader from '../components/NavHeader.vue'
export default {
  components: { NavFooter, NavHeader },
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    console.log(123)
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
</style>