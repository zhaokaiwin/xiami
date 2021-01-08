<template>
  <div class="wrapper">
    <div class="ali-pay">
      <div class="form" v-html="content"></div>
    </div>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
export default {
  components: { Loading },
  props: {},
  data () {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    }
  },
  methods: {
    paySubmit () {
      this.axios.post('/pay', {
        orderId: this.orderId,
        orderName: '凯哥哥',
        amount: 0.01, // 单位元
        payType: 1 // 支付类型
      }).then(res => {
        this.content = res.content
        setTimeout(() => {
          document.forms[0].submit()
        }, 500)
      })
    }
  },
  mounted () {
    this.paySubmit()
  }
}
</script>
<style lang="scss" scoped>
</style>
