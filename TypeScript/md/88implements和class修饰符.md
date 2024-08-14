## class 的基本用法，继承和类型约束，implements

## class 的修饰符，readonly private protected public

private 只能在自己内部使用，不允许子类和外部使用
protected 可以在自己内部和子类中使用，不允许外部使用
public 可以在自己内部、子类和外部使用,默认

class 的继承

## super 原理

子类的 constructor 中要写 super()
子类的 constructor 中调用 super 方法，会调用父类的 constructor 方法
当创建 Child 类的实例时，首先会调用父类 Parent 的 constructor 并输出 Parent constructor with name: John，然后再输出 Child constructor
通过 call 传参

原理是父类的 prototype.constructor.call(this,...args)

## 静态方法

static 修饰的方法，只能被类本身调用，不能被实例调用

```
static version() {
    return '1.001'
}
只能通过Vue.version调用
不能通过
let vm=new Vue()
不能通过vm.version()调用


```

## get set

class 类的 内置方法 get，set
相当于拦截器
set 是赋值前操作的方法
get 是取值前操作的方法

## absract

抽象类
abstract 修饰的方法不能被实例化，只能被继承
用来顶层设计，让子类去实现 abstract 方法的功能
我们定义的抽象方法必须在派生类实现
