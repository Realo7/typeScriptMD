## symbol 类型

每个 symbol 都是唯一的
它常被用于创建对象的私有属性，以避免属性名冲突或提供更安全的对象属性访问控制。

```javascript
let a1: symbol = Symbol('a')
let a2: symbol = Symbol('a')
console.log(a1 === a2) //false
```

```javascript
let mySymbol = Symbol('mySymbolDescription')

let obj = {
  [mySymbol]: 'This is a private property',
}
// 其他代码无法直接通过常规方式访问这个属性
```

不可修改和不可枚举：Symbol 创建的值不能被修改，并且默认情况下不会出现在 for...in 循环或 Object.keys() 等枚举方法中。

:使用 symbol 定义的属性，是不能通过如下方式遍历拿到的

```javascript
const symbol1 = Symbol('666')
const symbol2 = Symbol('777')
const obj1 = {
  [symbol1]: '小满',
  [symbol2]: '二蛋',
  age: 19,
  sex: '女',
}
// 1 for in 遍历
for (const key in obj1) {
  // 注意在console看key,是不是没有遍历到symbol1
  console.log(key) // age sex
}
// 2 Object.keys 遍历
Object.keys(obj1) // 没有遍历到symbol1
console.log(Object.keys(obj1)) // [ 'age','sex' ]
// 3 getOwnPropertyNames
console.log(Object.getOwnPropertyNames(obj1)) // [ 'age','sex' ]
// 4 JSON.stringfy
console.log(JSON.stringify(obj1)) // {"age":19,"sex":"女"}
```

如何拿到?
getOwnPropertySymbols

```javascript
// 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
Object.getOwnPropertySymbols(obj1) // [ Symbol(666), Symbol(777) ]
console.log(Object.getOwnPropertySymbols(obj1))
// 2 es6 的 Reflect 拿到对象的所有属性
Reflect.ownKeys(obj1)
console.log(Reflect.ownKeys(obj1))
```

## 生成器，迭代器

### 生成器

用法一样，写法不同

```javascript
fucntion* generator() {
  yield Promise.resolve(1) //同步异步
  yield 2
  yield 3

}
// 用法
const man=generator()
console.log(man.next()) //第一次调用，显示{value：Promise(1),done:false}
console.log(man.next())   //第二次调用，显示{value：2,done:false}
console.log(man.next())   //第三次调用，显示{value：3,done:false}
console.log(man.next())   //第四次调用，显示{value：undefined,done:true}
```

### 迭代器

set map

```javascript
let set：Set<number>=new Set([1,1,2,2,3,3])
//编译之后就是[1,2,3]
map类似对象，但是可以使用引用类型()作为key
let map:Map<any,any>=new Map()
map.set('a',1)
mao.get('a')  //输出1
```

伪数组 aguments 这样的，不能调用数组的 foreach 方法
以及对象中含有 symbol 的属性，不能使用 for in 遍历

<!-- 使用迭代器 -->

```javascript
let map: Map<any, any> = new Map()

let Arr = [1, 2, 3]
map.set(Arr, '小满')
// each
let each = (value: any) => {
  // array[Symbol.iterator]()是类数组对象中的一个方法 Symbol.iterator
   // 1.获取迭代器
  let It: any = value[Symbol.iterator]()
  let next:any = { done: false }
  while (!next.done) {
    next = It.next()
    if(!next.done){
      // 输出迭代出的值
      console.log(next.value)
    }
}
each(map)
```

### 迭代器的语法糖

for of
和上面代码逻辑一致
for of 对象不可以用

### 解构

底层原理也是调用 iterator

```javascript
(...a)
let [a, b, c] = [1, 2, 3]
console.log(a, b, c) // 1 2 3
```
