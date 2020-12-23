import Mock from 'mockjs'
// const data =
//   [{
//     'id|+1': 1,
//     username: '@cname',
//     email: 'kaiwin@163.com',
//     'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
//     role: 'user',
//     color: '@color',
//     city: '@city(true)',
//     createTime: new Date().getTime(),
//     updateTime: new Date().getTime()
//   }]
Mock.mock('/api/user/redmi', {
  status: 0,
  data: {
    total: 19,
    list: [
      {
        id: 30,
        categoryId: 100012,
        name: 'Redmi Note 9 系列',
        subtitle: '3200万+4800万 前后双旗舰相机',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/584add2c9cfdb9eefe7b642bf191773a.png',
        price: 999,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 31,
        categoryId: 100012,
        name: 'Redmi K30S 至尊纪念版',
        subtitle: '3200万+4800万 前后双旗舰相机',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81808cd191332114f44d8d0cb0d0813a.png',
        price: 2599,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 32,
        categoryId: 100012,
        name: 'Redmi K30 至尊纪念版',
        subtitle: '直出超质感美颜',
        mainImage: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png',
        price: 1999,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 33,
        categoryId: 100012,
        name: 'Redmi 9A',
        subtitle: '小米9 战斗天使',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/31d0dc82068abcaa46464b4baa9fbbdf.jpg',
        price: 599,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 34,
        categoryId: 100012,
        name: 'Redmi 10X',
        subtitle: '快的不只是5G',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7bd1b02e0329bd5c41d193f01349f991.jpg',
        price: 2699,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 35,
        categoryId: 100012,
        name: 'Redmi K30',
        subtitle: '5G环绕屏概念手机',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg',
        price: 1999,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 36,
        categoryId: 100012,
        name: 'Redmi Note 8 Pro',
        subtitle: '6400万全场景四摄',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a6548361871303764d6c66142074524.png',
        price: 1399,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 37,
        categoryId: 100012,
        name: 'Redmi Note 8',
        subtitle: '千元4800万四摄',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
        price: 999,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      }
    ],
    pageNum: 1,
    pageSize: 10,
    size: 10,
    startRow: 1,
    endRow: 10,
    pages: 2,
    prePage: 0,
    nextPage: 2,
    isFirstPage: true,
    isLastPage: false,
    hasPreviousPage: false,
    hasNextPage: true,
    navigatePages: 8,
    navigatepageNums: [
      1,
      2
    ],
    navigateFirstPage: 1,
    navigateLastPage: 2
  }
})
Mock.mock('/api/user/computer', {
  status: 0,
  data: {
    total: 19,
    list: [
      {
        id: 30,
        categoryId: 100012,
        name: 'Redmi G 游戏本',
        subtitle: '3200万+4800万 前后双旗舰相机',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0bfdd3b985b4a9da58a1f5a861c5895f.png',
        price: 9999,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 31,
        categoryId: 100012,
        name: 'RedmiBook 16',
        subtitle: '3200万+4800万 前后双旗舰相机',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e6c9a677acbb3b0c75d4d0d83e8a695.png',
        price: 4999,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 32,
        categoryId: 100012,
        name: 'RedmiBook 14 II',
        subtitle: '直出超质感美颜',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e27b3211230c2b8c21c0ef4efcbc17bc.png',
        price: 3299,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 33,
        categoryId: 100012,
        name: 'Pro 15.6 2020款',
        subtitle: '小米9 战斗天使',
        mainImage: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d712f71b3c4a3b562601c2b956a660ad.png',
        price: 5999,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 34,
        categoryId: 100012,
        name: 'RedmiBook Air 13',
        subtitle: '快的不只是5G',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/682027c81244d5244d72990cc8b5341f.png',
        price: 4599,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 35,
        categoryId: 100012,
        name: '显示器',
        subtitle: '5G环绕屏概念手机',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f0f2175b9a6d4fdb0f0eeb843398044.png',
        price: 2599,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      }
    ]
  }
})
Mock.mock('/api/user/furniture', {
  status: 0,
  data: {
    total: 19,
    list: [
      {
        id: 30,
        categoryId: 100012,
        name: '米家互联网空调C1',
        subtitle: '3200万+4800万 前后双旗舰相机',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03dc85cd792904ddc8027b2d781beed8.png',
        price: 2999,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 31,
        categoryId: 100012,
        name: '米家互联网空调',
        subtitle: '3200万+4800万 前后双旗舰相机',
        mainImage: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e06b219c5bced9256467b17738a943c6.png',
        price: 2399,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 32,
        categoryId: 100012,
        name: 'Redmi全自动洗衣机',
        subtitle: '直出超质感美颜',
        mainImage: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c5d772b7c2a159c3ed7d4e31bd293f18.jpg',
        price: 799,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 33,
        categoryId: 100012,
        name: '米家互联网洗烘一体机10kg',
        subtitle: '小米9 战斗天使',
        mainImage: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11b8bca444aba2994fe852993eac9203.png',
        price: 1899,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 34,
        categoryId: 100012,
        name: 'Redmi 10X',
        subtitle: '米家风冷对开门冰箱 483L',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7a4e3ff7919ca2407ad970b78abd09a.jpg',
        price: 2199,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      },
      {
        id: 35,
        categoryId: 100012,
        name: '米家两门冰箱',
        subtitle: '5G环绕屏概念手机',
        mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/40ad6e8398095e97309a5538b516a2de.jpg',
        price: 899,
        status: 1,
        imageHost: 'http://img.springboot.cn'
      }
    ]
  }
})
