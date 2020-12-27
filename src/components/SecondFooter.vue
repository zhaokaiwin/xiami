<template>
  <div class="footer">
      <div class="footer-link">
        <a href="https://github.com/zhaokaiwin" target="_blank">Kaiwin的Github地址</a><span>|</span>
        <a href="https://blog.csdn.net/ZhaoKaiSX" target="_blank">Kaiwin的CSDN博客</a><span>|</span>
        <a href="http://zhaokaige.com/" target="_blank">Kaiwin的个人网站</a><span>|</span>
        <a href="http://zhaokaige.com/" target="_blank">Kaiwin京东商城</a>
      </div>
      <p class="copyright">Copyright ©2019<a class="website" href="http://zhaokaige.com/">zhaokaige.com</a> 版权所有
      <a
        class="shanxi"
        href="https://beian.miit.gov.cn/?spm=5176.13841030.7y9jhqsfz.110.568d5c69tL6jBh"
        >陕ICP备20000817号</a
      ></p>
    </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
 .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
        &:hover {
          color: #FF6600;
        }
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
      .website {
      color: #999;
        &:hover {
          color: #FF6600;
        }
      }
      .shanxi {
      color: #999;
       &:hover {
      color: #FF6600;
      }
      }
    }
  }
</style>
