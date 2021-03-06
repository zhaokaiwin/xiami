import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
const mock = true
if (mock) {
  require('./mock/api')
}
// import env from './env'
// 根据前端的跨域方式进行处理 例如接口为 /a/b  在前端进行转化为/api/a/b =>在转发过程中将/api干掉了变为 /a/b
// 只要cors 和 jsonp 才需要环境变量配置
Vue.prototype.$message = Message
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000 // 超时8s
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  const path = location.hash
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    if (path !== '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    Message.warning(res.msg)
    return Promise.reject(res)
  }
})
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/audio.svg'
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
