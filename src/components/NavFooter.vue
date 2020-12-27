<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo.png" alt="" />
      <div>Kaiwin前端进阶之路</div>
    </div>
    <div class="footer-link">
      <a target="_blank" href="https://github.com/zhaokaiwin">Kaiwin的Github地址</a>
      <a target="_blank" href="https://blog.csdn.net/ZhaoKaiSX">Kaiwin的CSDN博客</a>
      <a target="_blank" href="http://zhaokaige.com/">Kaiwin的个人网站</a>
      <a target="_blank" href="http://zhaokaige.com/">Kaiwin京东商城</a>
    </div>
    <div>
      Copyright © 2020-2021
      <a class="website" href="http://zhaokaige.com/" target="_blank">zhaokaige.com</a> 版权所有
      <a
        class="shanxi"
        href="https://beian.miit.gov.cn/?spm=5176.13841030.7y9jhqsfz.110.568d5c69tL6jBh"
        target="_blank"
        >陕ICP备20000817号</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/config.scss';
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 30px;
    div {
      margin-top: -10px;
      font-size: 18px;
    }
  }
  .footer-link {
    a {
      color: #999;
      display: inline-block;
      &::after {
        content: '';
        display: inline-block;
        height: 10px;
        background-color: #999;
        width: 1px;
        margin: 0 10px;
      }
      &:last-child::after {
        display: none;
      }
      &:hover {
        color: $colorA;
      }
    }
    margin-bottom: 10px;
  }
  .website {
    color: $colorA;
  }
  .shanxi {
    color: #999;
    &:hover {
      color: $colorA;
    }
  }
}
</style>
