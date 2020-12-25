<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="`${sub ? `/#/product/${sub.id}` : ''}`">
                      <img
                        :src="`${sub ? sub.img : '/imgs/logo.png'}`"
                        alt=""
                      />
                      {{ sub ? sub.name : 'Kaiwin' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children">
                 <ul v-for="(item, index) in tvList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="`${sub ? `/#/product/${sub.id}` : ''}`">
                      <img
                        :src="`${sub ? sub.img : 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png'}`"
                        alt=""
                      />
                      {{ sub ? sub.name : 'Kaiwin电视' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 显示器</a>
              <div class="children">
                  <ul v-for="(item, index) in computerList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="`${sub ? `/#/product/${sub.id}` : ''}`">
                      <img
                        :src="`${sub ? sub.img : 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea840f3f79798c9a29d9921b9edf50ac.png'}`"
                        alt=""
                      />
                      {{ sub ? sub.name : 'Kaiwin笔记本' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children">
                 <ul v-for="(item, index) in furnitureList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="`${sub ? `/#/product/${sub.id}` : ''}`">
                      <img
                        :src="`${sub ? sub.img : 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg'}`"
                        alt=""
                      />
                      {{ sub ? sub.name : 'Kaiwin家具' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children">
                 <ul v-for="(item, index) in furnitureList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="`${sub ? `/#/product/${sub.id}` : ''}`">
                      <img
                        :src="`${sub ? sub.img : 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/971c8c01a246c7ac69a4c9be9e77e832.jpg'}`"
                        alt=""
                      />
                      {{ sub ? sub.name : 'Kaiwin出行' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children">
                <ul v-for="(item, index) in routerList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="`${sub ? `/#/product/${sub.id}` : ''}`">
                      <img
                        :src="`${sub ? sub.img : 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg'}`"
                        alt=""
                      />
                      {{ sub ? sub.name : 'Kaiwin智能' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children">
                <ul v-for="(item, index) in configList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="`${sub ? `/#/product/${sub.id}` : ''}`">
                      <img
                        :src="`${sub ? sub.img : 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c6e60e48edf17219724faad95963b93.jpg'}`"
                        alt=""
                      />
                      {{ sub ? sub.name : 'Kaiwin智能' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">健康 儿童</a>
              <div class="children">
                <ul v-for="(item, index) in healthList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="`${sub ? `/#/product/${sub.id}` : ''}`">
                      <img
                        :src="`${sub ? sub.img : 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4bf92a8a492f692a81794f52fefd1a29.png'}`"
                        alt=""
                      />
                      {{ sub ? sub.name : 'Kaiwin健康' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">耳机 音响</a>
              <div class="children">
                <ul v-for="(item, index) in musicList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="`${sub ? `/#/product/${sub.id}` : ''}`">
                      <img
                        :src="`${sub ? sub.img : 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/abe665fafbef94eb3626ae8baf1de97e.jpg'}`"
                        alt=""
                      />
                      {{ sub ? sub.name : 'Kaiwin音乐' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children">
                <ul v-for="(item, index) in lifeList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="`${sub ? `/#/product/${sub.id}` : ''}`">
                      <img
                        :src="`${sub ? sub.img : 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e9bc4f84825f80ce520eefa4f762939.jpg'}`"
                        alt=""
                      />
                      {{ sub ? sub.name : 'Kaiwin生活' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptionsObject">
          <swiper-slide v-for="(item, index) in swiperList" :key="index">
            <a :href="`/#/product/${item.id}`"
              ><img :src="item.img" alt=""
            /></a>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ServiceBar from '../components/ServiceBar'
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  data () {
    return {
      swiperOptionsObject: {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-5.jpg'
        }
      ],
      menuList: [
        [
          {
            id: 30,
            name: '小米X40',
            img: '/imgs/item-box-1.png'
          },
          {
            id: 31,
            name: '小米8青春版',
            img: '/imgs/item-box-2.png'
          },
          {
            id: 32,
            name: 'Redmi K20 Pro',
            img: '/imgs/item-box-3.jpg'
          },
          {
            id: 33,
            name: '移动4G专区',
            img: '/imgs/item-box-4.jpg'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      tvList: [
        [
          {
            id: 30,
            name: '小米透明电视',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png'
          },
          {
            id: 31,
            name: '小米电视 82英寸',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8f12c8d20878e88b66047ef32566e48.png'
          },
          {
            id: 32,
            name: '电视大师 62英寸',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7da49e7ada2229c963c9c7353a58d49b.png'
          },
          {
            id: 33,
            name: 'Redmi 智能电视',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      computerList: [
        [
          {
            id: 30,
            name: '小米笔记本',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png'
          },
          {
            id: 31,
            name: '小米游戏本',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea840f3f79798c9a29d9921b9edf50ac.png'
          },
          {
            id: 32,
            name: '显示器34寸 ',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b32e4db4b53b0c56c6040f094e96d945.png'
          },
          {
            id: 33,
            name: '小米显示器',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dae66d0f978b04b539aef092aee50f2f.png'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      furnitureList: [
        [
          {
            id: 30,
            name: '冰箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg'
          },
          {
            id: 31,
            name: '洗衣机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png'
          },
          {
            id: 32,
            name: '净水器 ',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg'
          },
          {
            id: 33,
            name: '灯具',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      travelList: [
        [
          {
            id: 30,
            name: '手表',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png'
          },
          {
            id: 31,
            name: '无线车充',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/efd04d4a90822e7e2f04a365083f2607.jpg'
          },
          {
            id: 32,
            name: '智能后视镜 ',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/971c8c01a246c7ac69a4c9be9e77e832.jpg'
          },
          {
            id: 33,
            name: '智能记录仪',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2748064a9ac9969e53851479d55f1a9.jpg'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      routerList: [
        [
          {
            id: 30,
            name: '摄像头',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg'
          },
          {
            id: 31,
            name: '喷墨打印机',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png'
          },
          {
            id: 32,
            name: '小爱老师 ',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/90b75c1046e486c19f14effd9b45f488.png'
          },
          {
            id: 33,
            name: '智能门锁',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      configList: [
        [
          {
            id: 30,
            name: '智能电源',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png'
          },
          {
            id: 31,
            name: '车充',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/397d8119508e8e3c895fc30ece88e799.jpg'
          },
          {
            id: 32,
            name: '平板配件',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6ce8ff4bc1e6ded2d40c53b2aa83b98c.jpg'
          },
          {
            id: 33,
            name: '无线充电',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      healthList: [
        [
          {
            id: 30,
            name: '洗手机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg'
          },
          {
            id: 31,
            name: '修剪器',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg'
          },
          {
            id: 32,
            name: '遥控电动',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ab36232a1004421e1a5b3efd0b9226c0.jpg'
          },
          {
            id: 33,
            name: '早教启智',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2cb10391d6527bf64126a63446a38e2e.jpg'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      musicList: [
        [
          {
            id: 30,
            name: 'Redmi触摸音响',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7628d4253b1c1fccb5606095d0c5bbe3.png'
          },
          {
            id: 31,
            name: '线控耳机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b3d235f4a5a5bf5c9d8d066d2166e6c.jpg'
          },
          {
            id: 32,
            name: '头戴耳机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28a77451da1dbd0d3e42d529777997c3.jpg'
          },
          {
            id: 33,
            name: '小爱音响',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/374ce749560e0e74a792b6222048a472.png'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      lifeList: [
        [
          {
            id: 30,
            name: '双肩背包',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg'
          },
          {
            id: 31,
            name: '旅行箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg'
          },
          {
            id: 32,
            name: '毛巾浴巾',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21c3ec8638dd75f5c54f1a69864a1cc9.jpg'
          },
          {
            id: 33,
            name: '眼镜',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
  }
}
</script>
<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/config.scss';
.index {
  .swiper-box {
    position: relative;
    .swiper-button-prev {
      left: 242px;
      --swiper-theme-color: #ec4dd7;
      z-index: 1;
    }
    .swiper-button-next {
      --swiper-theme-color: #ec4dd7;
      z-index: 1;
    }
    .nav-menu {
      .menu-wrap {
        position: absolute;
        padding-top: 20px;
        padding-bottom: 20px;
        width: 234px;
        height: 460px;
        box-sizing: border-box;
        z-index: 5;
        background: rgba(105, 101, 101, 0.6);
        color: white;
        font-size: 14px;
        .menu-item {
          padding-left: 30px;
          height: 42px;
          line-height: 42px;
          box-sizing: border-box;
          a {
            color: white;
            &::after {
              content: '';
              float: right;
              margin-right: 20px;
              margin-top: 18px;
              display: inline-block;
              width: 8px;
              height: 8px;
              border-top: 2px solid white;
              border-right: 2px solid white;
              vertical-align: middle;
              transform: rotate(45deg);
            }
            &::after:hover {
              border-top: 2px solid rgb(230, 227, 227);
              border-right: 2px solid rgb(230, 227, 227);
            }
          }
          &:hover {
            background: $colorA;
            cursor: pointer;
            .children {
              display: block;
            }
          }
          .children {
            width: 993px;
            height: 460px;
            background: $colorG;
            position: absolute;
            display: none;
            top:0;
            left:234px;
            border:1px solid $colorH;
            z-index: 99;
            ul {
              display: flex;
              justify-content: space-between;
              height: 76px;
              position: relative;
              z-index: 20;
              margin-left: 20px;
              li {
                width: 248.25px;
                height: 76px;
                line-height: 76px;
                a {
                  display: block;
                  width: 172px;
                  height:40px;
                  color: $colorB;
                  font-size: 14px;
                  img {
                    width: 42px;
                    height:35px;
                    vertical-align: middle;
                    margin-right: 12px;
                  }
                  &::after {
                  display: none;
                  }
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 460px;
      width: 1226px;
      img {
        width: 100%;
      }
    }
    .swiper-pagination {
      bottom: 10px;
      right: 45%;
      z-index: 1;
      span {
        margin-right: 10px;
        background: orangered;
        outline: none;
      }
    }
  }
}
</style>
