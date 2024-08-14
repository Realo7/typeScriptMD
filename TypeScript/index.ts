// 结合题目实现
// 实现一个函数支持任意类型
// 如果是对象，就检查里面的属性，
// 如果里面的属性是 number 就取两位，如果是 string 就去除左右空格
// 如果是函数就执行
const isObj = (data: any) => ({}.toString.call(data) === '[object Object]')
// '[object Object]' 是 JavaScript 中通过 Object.prototype.toString.call() 方法获取对象类型时，对于普通对象的特定返回值。

// 除了普通对象，其他数据类型会有不同的返回值，比如：
// 数组：[object Array]
// 函数：[object Function]
// 日期：[object Date]
const fn = (data: any) => {
  // 是普通对象，不能用forin，forin会遍历原型上的属性
  if (isObj(data)) {
    Object.keys(data).forEach((key) => {})
  }
}
