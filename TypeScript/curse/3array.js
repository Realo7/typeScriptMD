// 数组正确定义方式
//类型加中括号
let arr = [123];
//这样会报错定义了数字类型出现字符串是不允许的
// let arr1: number[] = [1, 2, 3, '1']
let arr2 = [1, 2, 3];
// arr.unshift('1') //类型“string”的参数不能赋给类型“number”的参数
// 二维数组
let arr3 = [[]];
//大杂烩数组
let arr4 = [1, 'ss', true, {}];
function att(...args) {
    if (args instanceof Array) {
        console.log('这是一个数组');
    }
    else {
        console.log('这不是一个数组');
    }
    args.push('111222');
    console.log(args);
}
att();
