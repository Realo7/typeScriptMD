// 联合类型
//例如我们的手机号通常是13XXXXXXX 为数字类型 这时候产品说需要支持座机
//所以我们就可以使用联合类型支持座机字符串
let myPhone = '010-820';
// 函数使用联合类型
const fn = (something) => {
    return !!something;
};
const xiaoman = (man) => {
    console.log(man.age);
    console.log(man.height);
    console.log(man.sex);
};
xiaoman({ age: 18, height: 180, sex: 'male' });
const fn1 = (type) => {
    return type.run;
};
//可以使用类型断言来推断他传入的是A接口的值
// 编译过程中会删除类型断言
