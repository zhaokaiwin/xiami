<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-car"
            ><span class="icon-car"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>Redme红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>家电</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="search">
            <input type="text" name="search">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      a {
        color: #b0b0b0;
        margin-right: 17px;
         &:hover {
        color:#fff;
        }
      }
      .my-car {
        display: inline-block;
        width: 120px;
        background-color: #424242;
        text-align: center;
        .icon-car {
          @include bgImg(16px,12px,'/imgs/icon-cart.png');
          margin-right: 3px;
        }
      }
      .my-car:hover {
        background-color: #ff6700;
        color: #fff;
        .icon-car {
          @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
          margin-right: 3px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 100px;
      @include flex();
      .header-logo {
        width: 55px;
        height: 55px;
        background: #ff6700;
        a {
          width: 110px;
          height: 55px;
          display: inline-block;
          &::before {
            content: ' ';
            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
            cursor: pointer;
            transition: margin 0.2s;
          }
          &::after {
            content: ' ';
            @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
            cursor: pointer;
          }
          &:hover::before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          font-size: 15px;
          font-weight: 500;
          color: #333333;
          line-height: 100px;
          padding-right: 18px;
          span {
            cursor: pointer;
          }
          /* 后期添加给每个子菜单添加展示 */
          &:hover {
          }
        }
      }
      .header-search {
        width: 296px;
        .search {
          border: 1px solid #e0e0e0;
          height: 50px;
          display: flex;
          align-items: center;
          input {
            border:none;
            outline: none;
            width:246px;
            box-sizing:border-box;
            border-right:1px solid #e0e0e0;
            height: 50px;
            text-indent: 2em;
          }
          a {
            @include bgImg(18px,18px,"/imgs/icon-search.png");
            margin-left:15px;
          }
        }
      }
    }
  }
}
</style>
