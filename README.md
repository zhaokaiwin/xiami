# 小米商城实现

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


一、项目描述

- 一个基于 vue、ElementUI，通过 vue 组件实现数据动态刷新渲染，详情具体组件使用情况请点击下方 ElementUI 文档。
- 项目部分区域使用了全局注册方式，增加了打包体积，在实际运用中请使用按需引入。
- 项目环境：vue-cli-3.0、webpack-4.0、npm-6.14.8、node-v14.15.1、element-ui-2.14.1.

友情链接：

1. [Vue 官方文档](https://cn.vuejs.org/v2/guide/instance.`html`)

2. [ElmentUI官方文档](https://element.eleme.cn/#/zh-CN/component/installation)

3. [Npm依赖查询](https://www.npmjs.com/)

项目首页截图

#### 商城首页
   ![商城首页](https://github.com/zhaokaiwin/zhaokaiwin/blob/main/xiami.png)   
#### 商品页面
   ![商品页面](https://github.com/zhaokaiwin/zhaokaiwin/blob/main/%E5%95%86%E5%93%81%E9%A1%B5%E9%9D%A2.png) 
#### 商品详情页面
   ![商品详情页面](https://github.com/zhaokaiwin/zhaokaiwin/blob/main/%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85%E9%A1%B5%E9%9D%A2.png) 
#### 购物车页面
   ![购物车页面](https://github.com/zhaokaiwin/zhaokaiwin/blob/main/%E8%B4%AD%E7%89%A9%E8%BD%A6%E9%A1%B5%E9%9D%A2.png) 
#### 登录页面
   ![登录页面](https://github.com/zhaokaiwin/zhaokaiwin/blob/main/%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2.png) 
#### 注册页面
   ![注册页面](https://github.com/zhaokaiwin/zhaokaiwin/blob/main/%E6%B3%A8%E5%86%8C%E9%A1%B5%E9%9D%A2.png) 
#### 订单确认界面
   ![订单确认界面]()


二、项目目录介绍  


| 文件                 | 作用/功能                                           |
| ------------------- | --------------------------------------------------- |
| mian.js             | 主目录文件，全局引入了各种依赖              |
| assets/config.scss   | 各个页面 的字体与颜色 CSS 文件                  |
| assets/mixin.scss | 各个页面公共 CSS 文件                               |
| components | 此目录用来存放公共组件 |
| mock | 没有接口，采用 mock 开进行模拟接口 |
| views/其余文件      | 界面各个区域组件（按照位置来命名） |
| assets/scss/reset.scss | 通用 CSS 文件，全局项目快捷样式调节                 |
| assets              | 静态资源目录，放置 logo 与背景图片以及 scss 样式文件      |
| views/ index.vue    | 项目首页展示                                          |
| router | 路由配置文件 |
| storage | 对SessionStorage的封装 |
| util | 对公共方法的一些封装 |
| store | vuex 文件目录
| 其他 | 具体参考官网进行学习 |

## 三、使用介绍
1. **如何请求数据**
   建议使用 axios配合vue-axios 进行数据请求，在 main.js 位置进行全局配置
```javascript
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
```
