<template>
  <div class="header">
      <div class="nav-title"></div>
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username" class="username"><span style="color:#ddd1d1">尊敬的</span>{{username}}
          <span class="exit" @click="exit">退出</span>
          </a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-car"
          @click="goCart"
            ><span class="icon-car"></span>购物车({{cartCount}})</a
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
                        v-lazy="item.mainImage"
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
            <div class="children">
              <ul>
                <li class="product" v-for="item in redMiList" :key="item.id">
                  <a :href="`/#/product/${item.id}`" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="item.mainImage"
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
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'/imgs/nav-img/nav-3-6.png'"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视大师  82英寸至尊纪念版</div>
                    <div class="pro-price">49999元</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'/imgs/nav-img/nav-3-1.jpg'"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视大师 82英寸</div>
                    <div class="pro-price">9999元</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'/imgs/nav-img/nav-3-2.jpg'"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米透视电视</div>
                    <div class="pro-price">49999元</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'/imgs/nav-img/nav-3-3.png'"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视大师 65英寸OLED</div>
                    <div class="pro-price">12999元</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'/imgs/nav-img/nav-3-4.jpg'"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视MAX</div>
                    <div class="pro-price">19999元</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'/imgs/nav-img/nav-3-5.jpg'"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视4A 60英寸</div>
                    <div class="pro-price">2399元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in computerList" :key="item.id">
                  <a :href="`/#/product/${item.id}`" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="item.mainImage"
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
            <span>家电</span>
            <div class="children">
               <ul>
                <li class="product" v-for="item in furnitureList" :key="item.id">
                  <a :href="`/#/product/${item.id}`" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="item.mainImage"
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
import { mapState } from 'vuex'
export default {
  name: 'nav-header',
  data () {
    return {
      phoneList: [],
      redMiList: [],
      computerList: [],
      furnitureList: []
    }
  },
  computed: {
    ...mapState(['username', 'cartCount'])
    // username () {
    //   return this.$store.state.username
    // },
    // cartCount () {
    //   return this.$store.state.cartCount
    // }
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
          categoryId: '100012',
          pageSize: 6
        }
      }).then((res) => {
        // console.log(res)
        if (res.list.length >= 6) {
          this.phoneList = res.list.slice(0, 6)
        }
      })
    },
    getRedMi () {
      this.axios.get('/user/redmi').then(res => {
        this.redMiList = res.list
      })
    },
    getComputerList () {
      this.axios.get('/user/computer').then(res => {
        this.computerList = res.list
      })
    },
    getFurniture () {
      this.axios.get('/user/furniture').then(res => {
        this.furnitureList = res.list
      })
    },
    goCart () {
      this.$router.push('/cart')
    },
    login () {
      this.$router.push('/login')
    },
    exit () {
      this.axios.post('/user/logout').then((res) => {
        this.$message.success('退出成功')
        this.$cookie.set('userId', '', { expires: '-1' })
        this.$store.dispatch('exitUser', '')
        this.$store.dispatch('saveCartCount', 0)
      })
    },
    getCartCount () {
      this.$http.get('/carts/products/sum').then((res) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  },
  mounted () {
    this.getPhoneList()
    this.getRedMi()
    this.getComputerList()
    this.getFurniture()
    if (this.$route.params && this.$route.params === 'login') {
      this.getCartCount()
    }
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
   .nav-title {
     @include bgImg(100%, 120px, '/imgs/header-title.jpeg', cover);
     vertical-align: middle;
    }
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .topbar-user {
      .username {
        position: relative;
        display: inline-block;
        height: 39px;
        .exit {
        display: inline-block;
        color: #b0b0b0;
        width: 50px;
        height: 24px;
        line-height: 24px;
        display: none;
        position: absolute;
        text-align: center;
        top: 39px;
        left: 22px;
        z-index: 30;
        }
        &:hover {
         .exit {
          display: block;
          background: rgba(0, 0, 0, 0.11);
          color: white;
          &:hover {
          background:#333;
          color: white;
          }
         }
        }
      }
    }
    .container {
      @include flex();
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
        margin-right: 0;
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
