<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper  :options="swiperOptionsObject">
          <swiper-slide v-for="(item,index) in swiperList" :key="index">
            <a :href="`/#/product/${item.id}`"><img :src="item.img" alt=""></a>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"  slot="pagination"></div>
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
.index {
  .swiper-box {
    position: relative;
      .swiper-container {
      height: 460px;
      width:1226px;
      img {
        width:100%;
      }
    }
    .swiper-pagination {
        bottom: 0;
        right: 45%;
        span {
          margin-right: 10px;
          background:orangered;
          outline: none;
        }
      }
  }
}
</style>
