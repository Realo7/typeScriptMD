// 联合类型
//例如我们的手机号通常是13XXXXXXX 为数字类型 这时候产品说需要支持座机
//所以我们就可以使用联合类型支持座机字符串
let myPhone: number | string = '010-820'
// 函数使用联合类型
const fn = (something: number | boolean): boolean => {
  return !!something
}
// 交叉类型
// 多种类型的集合，联合对象将具有所联合类型的所有成员
interface People {
  age: number
  height: number
}
interface Man {
  sex: string
}
const xiaoman = (man: People & Man) => {
  console.log(man.age)
  console.log(man.height)
  console.log(man.sex)
}
xiaoman({ age: 18, height: 180, sex: 'male' })
// 类型断言
// 值 as 类型　　或　　<类型>值  value as string  <string>value
// type as A
interface A {
  run: string
}

interface B {
  build: string
}

const fn1 = (type: A | B): string => {
  return (type as A).run
}
//可以使用类型断言来推断他传入的是A接口的值
// 编译过程中会删除类型断言
