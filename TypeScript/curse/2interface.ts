// 定义：在ts中定义对象的方式要用interface关键字
//使用时不能多属性也不能少属性
interface animal {
  name: string
  age: number
  kind: string
  readonly cb: () => boolean
}

let human: animal = {
  name: 'hurui',
  age: 27,
  kind: 'male',
  cb: () => false,
}
// 2个interface重名时，他们会自动合并
// 属性太多,懒得一个一个定义
// 使用索引签名
// [propName: string]: any //有了这个之后就可以随便定义interface中的属性了
interface animal1 {
  name: string
  age: number
  [propName: string]: any
}

//interface中可有可无的值，在属性后面加？号
// 如
// interface animal1 {
//   name?: string
// }

// readonly,属性前面加上，该属性只读
// interface接口继承

// extends
interface fly extends animal {
  xxx: string
}
let flyquest: fly = {
  name: 'fly',
  age: 13,
  kind: 'male',
  xxx: '11',
  cb: () => false,
}
console.log(flyquest)
