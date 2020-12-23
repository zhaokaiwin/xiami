import Mock from 'mockjs'
const data =
  [{
    'id|+1': 1,
    username: '@cname',
    email: 'kaiwin@163.com',
    'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
    role: 'user',
    color: '@color',
    city: '@city(true)',
    createTime: new Date().getTime(),
    updateTime: new Date().getTime()
  }]
Mock.mock('/api/user/user', {
  status: 0,
  data: {
    'id|1-100': 1,
    username: '@cname',
    email: 'kaiwin@163.com',
    age: 18,
    role: 'admin',
    'list|10-20': data,
    createTime: new Date().getTime(),
    updateTime: new Date().getTime()
  }
})
