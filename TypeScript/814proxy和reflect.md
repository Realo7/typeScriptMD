## Proxy 代理 13 个方法，参数一模一样

Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

<!-- 理解，操作原来对象的拦截器 -->
<!-- Proxy 操作的是通过代理创建的新对象，对这个代理对象的操作会触发拦截和自定义处理。 -->

## Reflect 反射 13 个方法，参数一模一样

Reflect 是一个内置的对象，它提供了一系列用于拦截和操作对象的方法。
Reflect.get(target, propertyKey, receiver)：获取对象的属性值。
使用 Reflect 的好处包括：

1. 提供了一种更统一和规范的方式来执行对象的操作。
2. 与 Proxy 结合使用，实现更强大的对象代理功能。
<!-- 理解，Reflect 直接操作原始的目标对象。 -->

```ts
let obj = {
  name: 'Alice',
}
Reflect.get(obj, 'name') // 直接对原始的 obj 对象进行操作获取属性值
```

**Proxy 侧重于对象操作的拦截和定制，Reflect 侧重于提供规范的对象操作方法。**

## MOBX observer

```ts
import { log } from 'console'

let person = {
  name: 'John',
  age: 30,
  city: 'New York',
  hobbies: ['reading', 'swimming', 'cooking'],
}
let personProxy = new Proxy(person, {
  get(target, property, receiver) {
    if (target.age > 20) {
      return Reflect.get(target, property, receiver)
    } else {
      return 'You are too young to change this property'
    }
  },
})
Reflect.set(person, 'age', 19)

const list: Set<Function> = new Set()

const autorun = (cb: Function) => {
  if (cb) {
    list.add(cb)
  }
}
const observer = <T extends object>(target: T) => {
  return new Proxy(target, {
    set(target, property, value, receiver) {
      const result = Reflect.set(target, property, value, receiver)
      list.forEach((cb) => cb())
      console.log(list)
      return result
    },
  })
}
let ob = observer(person)

autorun(() => console.log('我变化了'))
ob.age = 20
Reflect.set(ob, 'age', 19)
```
