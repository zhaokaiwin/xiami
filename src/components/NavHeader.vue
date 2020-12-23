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
          <a href="javascript:;" v-if="username"><span style="color:#ff6700">尊敬的</span>{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-car"
          @click="goCart"
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
            <div class="children" name="fade">
              <ul>
                <li class="product" v-for="item in phoneList" :key="item.id">
                  <a :href="`/#/product/${item.id}`" target="_blank">
                    <div class="pro-img">
                      <img
                        :src="item.mainImage"
                        :alt="item.subtitle"
                      />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redme红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        src="/imgs/nav-img/nav-3-6.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米10至尊版</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        src="/imgs/nav-img/nav-3-1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米10至尊版</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        src="/imgs/nav-img/nav-3-2.jpg"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米10至尊版</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        src="/imgs/nav-img/nav-3-3.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米10至尊版</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        src="/imgs/nav-img/nav-3-4.jpg"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米10至尊版</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        src="/imgs/nav-img/nav-3-5.jpg"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米10至尊版</div>
                    <div class="pro-price">5299元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>家电</span>
            <div class="children">
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="search">
            <input type="text" name="search" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  data () {
    return {
      username: 'kaiwin',
      phoneList: []
    }
  },
  filters: {
    currency (val) {
      if (!val) return '￥0.00元'
      return `￥${val}元`
    }
  },
  methods: {
    getPhoneList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012'
        }
      }).then((res) => {
        if (res.list.length >= 6) {
          this.phoneList = res.list.slice(0, 6)
        }
      })
    },
    goCart () {
      this.$router.push('/cart')
    },
    login () {
      this.$router.push('/login')
    }
  },
  mounted () {
    this.getPhoneList()
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
  height: 210px;
}

.fade-enter-to {
  opacity: 1;
}
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
          color: #fff;
        }
      }
      .my-car {
        display: inline-block;
        width: 120px;
        background-color: #424242;
        text-align: center;
        .icon-car {
          @include bgImg(16px, 12px, '/imgs/icon-cart.png');
          margin-right: 3px;
        }
      }
      .my-car:hover {
        background-color: #ff6700;
        color: #fff;
        .icon-car {
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          margin-right: 3px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
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
            @include bgImg(55px, 55px, '/imgs/mi-logo.png', 55px);
            cursor: pointer;
            transition: margin 0.2s;
          }
          &::after {
            content: ' ';
            @include bgImg(55px, 55px, '/imgs/mi-home.png', 55px);
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
          &:hover {
            color: $colorA;
            .children {
              height: 210px;
              opacity: 1;
              transition: all .5s;
            }
          }
          /* 后期添加给每个子菜单添加展示 */
          .children {
            transition: all .5s;
            position: absolute;
            overflow: hidden;
            height:0;
            opacity: 0;
            z-index: 10;
            top: 90px;
            left: 0;
            width: 100%;
            background: white;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            .product {
              float: left;
              width:16.6%;
              height: 220px;
              text-align: center;
              position: relative;
              &::before {
              content:'';
              position: absolute;
              top: 28px;
              right:0;
              border-right:1px solid $colorF;
              height: 110px;
              width: 1px;
            }
            &:last-child::before {
              display: none;
            }
              a{
                display: inline-block;
              }
              img {
                height: 110px;
                width:auto;
                margin-top: 26px;
              }
              .pro-img {
                height: 110px;
              }
              .pro-name {
                height: 20px;
                font-size: 12px;
                font-weight: 500;
                color:$colorB;
              }
              .pro-price {
                height: 20px;
                font-size: 12px;
                font-weight: 500;
                color:$colorA;
              }
            }
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
            border: none;
            outline: none;
            width: 246px;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            height: 50px;
            text-indent: 2em;
          }
          a {
            @include bgImg(18px, 18px, '/imgs/icon-search.png');
            margin-left: 15px;
          }
        }
      }
    }
  }
}
</style>
