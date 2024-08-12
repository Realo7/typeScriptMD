### 操作字符串

1.获取字符串某个指定位置的字符

2.把一个字符串全部变为大写

3.把一个字符串全部变为小写

4.搜索指定字符串出现的位置

5.返回指定索引区间的子串

## 数组

1.取得 Array 的长度

2.对 Array 的索引进行赋值会直接修改这个 Array

3.搜索一个指定的元素的位置

4.截取 Array 的部分元素，然后返回一个新的 Array

5.向 Array 的末尾添加若干元素

6.把 Array 的最后一个元素删除掉

7.对当前 Array 进行排序,直接调用时，按照默认顺序排序

8.把整个 Array 的元素给掉个个，也就是反转

9.修改 Array 的“万能方法”,可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素

10.把当前的 Array 和另一个 Array 连接起来,没有修改当前 Array ，而是返回了一个新 Array

11.把当前 Array 的每个元素都用指定的字符串连接起来，然后返回连接后的字符串

## 对象

1.给一个对象添加或删除属性

2.检测对象是否拥有某一属性，可以用?操作符.要小心这个属性不一定是 这个对象的，它可能是这个对象继承得到的

3.要判断一个属性是否是自身拥有的，而不是继承得到的，可以用 ? 方法

## Map 和 Set

ES6 规范引入了新的数据类型 Map,Map 是一组键值对的结构，具有极快的查找速度。

初始化 Map
Map 具有以下方法
通过 ??? 方法可以添加元素到 Set 中，可以重复添加，但不会有效果：
通过 ??? 方法可以删除元素：

## Iterable

ES6 标准引入了新的 iterable 类型,Array，Map，Set 属于；

具有 iterable 类型的集合可以通过新的 ? 循环来遍历。

更好的方式是直接使用 ? 内置的 ? 方法

## 函数

<!-- arguments -->

JavaScript 还有一个免费赠送的关键字 ? ，它只在函数内部起作用，并且永远指向当前函数
的调用者传入的所有参数。
利用 arguments ，你可以获得调用者传入的所有参数。

ES6 标准引入了 rest 参数

```javascript
function foo(a, b, ...rest) {
  console.log('a = ' + a)
  console.log('b = ' + b)
  console.log(rest)
}
```

rest 参数只能写在 ? ，前面用 ? 标识

JavaScript 的函数在查找变量时从自身函数定义开始，从“?”向“?”查找。如果内部函数定义了与外部函数重名的变量，优先使用？的变量。

变量“提升”
JavaScript 引擎自动提升了变量 y 的声明，但不会提升变量 y 的赋值

```javascript
function foo() {
var x = 'Hello, ' + y;
console.log(x);
console.log(y);提升变量y的申明，此时y为undefined
var y = 'Bob';
}

```

#### 全局作用域

不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript 默认有一个全局对象 ? ，全局作用域的变量实际上被绑定到 ? 的一个属性：

#### 变量和常量

var
let
const

### 方法

绑定到对象上的函数称为方法

```javascript
var xiaoming = {
  name: '小明',
  birth: 1990,
  age: function () {
    var y = new Date().getFullYear()
    return y - this.birth
  },
}
```

#### this 指向问题

1.this 永远指定一个对象

2.普通函数中谁调用 this，就指向谁

3.箭头函数中指向父级作用域

```javascript
function play() {
    console.log(this) //这个指向的window

  },
const app={
  age:10,
  name: function (){
      console.log(this) //这里指向app
  }
}
```

##### 构造函数中的 this

在 JavaScript 中，call()、apply() 和 bind() 这三个方法

```javascript
class Student {
  constructor(id) {
    console.log(id)
    this.id = id
  }
  show() {
    console.log(this)
  }
}
const stu = new Student(12)
stu.show()
```

这里的 this 指向？

##### 箭头函数 this

箭头函数设计之初就没支持 this，无法自己定义 this 内容

箭头函数中的 this 指向，一层一层往上找，直到找到普通函数，普通函数是谁调用他指向谁
call
apply
函数本身的 call,apply 方法\
bind
bind() 方法创建一个新的函数，当这个新函数被调用时，其 this 值被指定为 bind() 的第一个参数，其余参数作为新函数的预设参数。

```javascript
function getAge() {
  var y = new Date().getFullYear()
  return y - this.birth
}
```

### 标准对象

为了区分对象的类型，我们用 ? 操作符获取对象的类型

获取当前时间戳?

### JSON

JSON 和 JavaScript 对象互转

## 面向对象编程

```javascript
var Student = {
  name: 'Robot',
  height: 1.2,
  run: function () {
    console.log(this.name + ' is running...')
  },
}
var xiaoming = {
  name: '小明',
}
xiaoming.__proto__ = Student
Object.setPrototypeOf(xiaoming, Student)
```

### class

新的关键字 class 从 ES6 开始正式被引入到 JavaScript 中。
