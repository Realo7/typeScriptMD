// 结合题目实现
// 实现一个函数支持任意类型
// 如果是对象，就检查里面的属性，
// 如果里面的属性是 number 就取两位，如果是 string 就去除左右空格
// 如果是函数就执行
var isObj = function (data) { return ({}.toString.call(data) === '[object Object]'); };
var isNum = function (data) { return typeof data === 'number'; };
var isStr = function (data) { return typeof data === 'string'; };
var isFun = function (data) { return typeof data === 'function'; };
// '[object Object]' 是 JavaScript 中通过 Object.prototype.toString.call() 方法获取对象类型时，对于普通对象的特定返回值。
// 除了普通对象，其他数据类型会有不同的返回值，比如：
// 数组：[object Array]
// 函数：[object Function]
// 日期：[object Date]
var fn = function (data) {
    // 是普通对象，不能用forin，forin会遍历原型上的属性
    if (isObj(data)) {
        Object.keys(data).forEach(function (key) {
            var value = data[key];
            if (isNum(value)) {
            }
            if (isStr(value)) {
                data[key] = value.trim();
            }
            if (isNum(value)) {
                data[key] = value.toFixed(2);
            }
            if (isFun(value)) {
                data[key]();
                //js基础知识，如果函数独立调用，那么this就是window
                // value()
            }
        });
    }
};
var obj = {
    a: 100.22222,
    b: ' test  ',
    c: function () {
        console.log(this);
        return this.a;
    },
};
fn(obj);
