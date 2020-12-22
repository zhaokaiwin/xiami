/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
const STORAGE_KEY = 'mall'
export default {
  /**
   * @param {*} key
   * @param {*} value
   * @param {*} module_name
   * if 中的是往user中增加一项属性
   * else 中的与user同一级的增加
   */
  setItem (key, value, module_name) {
    if (module_name) {
      const val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      const val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  /**
   * 获取某一个模块下面的属性user下面的username
   * @param {*} key
   * @param {*} module_name
   * @returns
   * 例如: {"user":{"username":"kaiwin","age":18}}
   * val为 user属性下面的 {"username":"kaiwin","age":18}
   */
  getItem (key, module_name) {
    // 带模块名称的
    if (module_name) {
      const val = this.getItem(module_name)
      if (val) return val[key]
    }
    // 不带模块名称的
    return this.getStorage()[key]
  },
  /**
   * @returns
   * 获取Session Storage中的 value 例如：👇
   * {"user": {"username": "kaiwin", "age": 18}}
   * 返回了user对象，格式如👇
   * {user: {username: "kaiwin", age: 18}}
   */
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || {})
  },
  clear (key, module_name) {
    const val = this.getStorage()
    if (module_name) {
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
