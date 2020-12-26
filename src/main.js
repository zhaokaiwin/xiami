import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
const mock = true
if (mock) {
  require('./mock/api')
}
// import env from './env'
// 根据前端的跨域方式进行处理 例如接口为 /a/b  在前端进行转化为/api/a/b =>在转发过程中将/api干掉了变为 /a/b
// 只要cors 和 jsonp 才需要环境变量配置
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000 // 超时8s
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
Vue.use(VueAxios, axios)
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/audio.svg'
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
