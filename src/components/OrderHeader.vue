<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo fl">
        <a href="/#/index"></a>
      </div>
      <div class="title fl">
        <h2>{{title}}<slot name="tip"></slot></h2>
      </div>
      <div class="username fr">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  computed: {
    ...mapState(['username'])
  },
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
.order-header {
  padding: 30px 0px;
  border-bottom: 2px solid #ff6600;
  .title,.username {
    display: inline-block;
    height: 54px;
    line-height: 54px;
  }
  .title {
    h2 {
       margin-left: 54px;
       font-size: 24px;
       color: #333;
    }
    span {
      margin-left: 13px;
      color: #999;
      font-size: 14px;
      font-weight: 400;
    }
    float: left;
  }
  .username {
    float: right;
    a {
      color: #666;
      font-size: 16px;
    }
  }
}
</style>
