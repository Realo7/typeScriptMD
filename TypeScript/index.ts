// import axios from 'axios'
// import https from 'https'
// import 'reflect-metadata'
// const agent = new https.Agent({
//   rejectUnauthorized: false,
// })
// // 忽略证书验证
// axios.defaults.httpsAgent = agent

// let obj: any = { name: '小满zs' } //1
// let aahph: any = obj //2
// let wmap: WeakMap<object, string> = new WeakMap()
// wmap.set(obj, '爱ss') //2 他的键是弱引用不会计数的
// obj = null // -1
// aahph = null //-1
// //v8 GC 不稳定 最少200ms
// setTimeout(() => {
//   console.log(wmap) //无属性
// }, 500)
let obj: any = { name: '小满zs' } //1
let aahph: any = obj //2
let wset: WeakSet<Object> = new WeakSet()
wset.add(obj) //2 他的键是弱引用不会计数的
obj = null // -1
aahph = null //-1
//v8 GC 不稳定 最少200ms
setTimeout(() => {
  console.log(wset) //无属性
}, 500)
