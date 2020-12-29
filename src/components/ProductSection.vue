<template>
  <div class="pro-sec" :class="{ 'is-fixed': isFiexd }">
      <div class="container">
          <div class="pro-sec-left">
              <span>Redmi 9A</span>
              <a href="javascript:;">Redmi 9</a>
              <a href="javascript:;">Redmi 8</a>
              <a href="javascript:;">Redmi 8A</a>
          </div>
          <div class="pro-sec-right">
              <a href="javascript:;">概述</a>
              <a href="javascript:;">参数</a>
              <a href="javascript:;">用户评价</a>
              <a href="javascript:;">咨询客服</a>
              <a href="javascript:;">用户评价</a>
              <slot name="buy"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFiexd: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollFiexed)
  },
  methods: {
    scrollFiexed () {
      const scrollTop = window.pageYOffset || document.documentElement || document.body.scrollTop
      this.isFiexd = scrollTop > 285
      // console.log(122)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollFiexed, false)
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.pro-sec {
  &.is-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: $colorG;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .07);
    animation: height 0.3s;
  }
  height: 70px;
  border-top: 1px solid $colorH;
  line-height: 70px;
  .container {
    @include flex();
    .pro-sec-left {
      a {
        font-size: $fontJ;
        color: #616161;
        &::before {
          content: '';
          display: inline-block;
          width: 2px;
          background-color:#616161;
          height: 12px;
          margin:0 .5em;
        }
        &:hover {
          color: $colorA;
        }
      }
    }
    .pro-sec-right {
     a {
        font-size: $fontJ;
        color: #616161;
        &::before {
          content: '';
          display: inline-block;
          width: 2px;
          background-color: #e0e0e0;
          height: 12px;
          margin:0 .5em;
        }
        &:first-child::before {
          display: none;
        }
         &:nth-child(5) {
           margin-right: 5px;
        }
        &:hover {
          color: $colorA;
        }
      }
    }
  }
}
</style>
