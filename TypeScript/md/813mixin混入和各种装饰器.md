## 命名空间

namespace 的用法嵌套，抽离，到处，简化，合并
namespace 里面的东西必须导出才能访问
支持嵌套 namespace
同名命名空间直接合并

```ts
namespace test {
  //   let a = 1 //外部无法通过test.a访问，添加export
  export let a = 1
}
// 简化
import a = test.a
console.log(a)
```

namespace 案例，相同的函数名称，不同设备使用不同命名空间

### 前端模块化规范

导入导出 es6 模块化规范用法

```js
//导出
export default {
  a: 1,
}
//引入
import test from './test'

// 遇到重名的
import obj, { xxx as bbb, add } from './test'

console.log(bbb)
// 4.动态引入
if (true) {
  // import返回的是个promise
  import('./test').then((res) => {
    console.log(res)
  })
}
```

## 声明文件

.d.ts

声明文件，声明了变量的类型，函数的类型，接口的类型，类的类型，枚举的类型，等等
使用第三方库必备
如果存在第三方声明文件
npm i --save-dev @types/express 这样
@types 是规范
没有只能自己写

```

```

## mixin 混入和浅拷贝

### 对象混入 合并 a 和 b 对象

合并对象的几种方式

```js
let a: A = {
  name: 'asda',
}
1.扩展运算符,浅拷贝，返回新的类型
let c={...a,...b}
2.Object.assgin 浅拷贝，返回交叉类型
let c=Object.assign({},a,b)
3.node18以上 深拷贝
structuredClone()
```

### 类的混入，a 类 b 类合并到一起

形成一个新的 C 类，可以调用 A 和 B 的方法和属性

```TS
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name]
    })
  })
}
```

## Decorator 装饰器、

### 类装饰器

```TS
const Base: ClassDecorator = (target) => {
  console.log(target)
  //打印出下面6行，说明传过来的是整个类已经初始化的值和方法
    //   constructor() {
    //     console.log('初始化构造器');
    // }
    // run() {
    //     console.log('http');
    // }
  target.prototype.stop = () => {
    console.log('111')
  }
}

@Base
class HTTP {
  constructor() {
    console.log('初始化构造器')
  }
  name: string
  run() {
    console.log('http')
  }
}

let a: any = new HTTP()
a.stop()
```

在上述示例中，logClass 函数就是一个装饰器，它**接收一个类的构造函数**作为参数，并在控制台上打印出类的名称。

<!--  -->

target 参数传递的是整个 HTTP 类的定义，而不仅仅是构造函数。
这意味着 target 包含了类的所有成员，如属性（name）、方法（run）以及构造函数。这样设计使得类装饰器能够全面地处理和修改类的结构和行为。

### 属性装饰器

不常用，用来定义属性
先忽略

### 参数装饰器

import 'reflect-metadata'

<!-- 可以快速存储元数据然后在用到的地方取出来 defineMetadata getMetadata -->

```ts
const result = () => {
  const fn: ParameterDecorator = (target, propertyKey, parameterIndex) => {
    console.log(target, propertyKey, parameterIndex)
    Reflect.defineMetadata('key', 'result', target)
  }
  return fn
}
// 自动处理接收到的参数getdata
getmd(@result() getdata: any) {
    console.log('getmd', getdata)
  }

```

### 方法装饰器

```ts
// 方法装饰器
const GET = (url: string) => {
  // 这里接的是个原型对象
  const fn: MethodDecorator = (target, propertyKey, descriptor) => {
    axios.get(url).then((res) => {
      console.log(res.data)
      descriptor.value = res.data
    })
  }
  return fn
}

class HTTP {
  // 处理完请求之后返回到下面getmd的参数里
  @GET('http://api.apiopen.top/api/getDynamic?page=0&size=10')
  getmd(getdata: any) {
    console.log('getmd', getdata)
  }
}
```

### 装饰器工厂

#### @Base 可以接受参数

<!-- 装饰器工厂 -->

@Base('xiaoman')

```ts
const Base = (params) => {
  这里传自定义参数
  const fn: ClassDecorator = (target) => {
    // 原本的需要接收的类传到这里
    console.log(target)
    target.prototype.stop = () => {
      console.log('111')
    }
  }
}
```

### 6.import 'reflect-metadata'

### axios
