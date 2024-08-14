## set 和 weakset

Set 是一种集合数据结构，它存储唯一的值，没有重复。
理解：自动去重的数组

```ts
// 创建一个 Set
let mySet = new Set()
// 向 Set 中添加元素
mySet.add(1)
mySet.add(2)
mySet.add(2) // 重复添加会被忽略
console.log(mySet.has(1)) // true
// 获取 Set 的大小
console.log(mySet.size)
```

### WeakSet 类似于 Set

1. 元素只能是对象：与 Set 不同，WeakSet 中的元素必须是对象。
2. 弱引用：WeakSet 对其中的对象元素持有弱引用。这意味着如果没有其他强引用指向这些对象，它们可以被垃圾回收器回收，WeakSet 中的相应元素也会自动被移除。
   WeakSet 常用于以下情况：
3. 跟踪对象的使用情况：当您只想知道某个对象是否在集合中，但又不希望阻止该对象被垃圾回收时。
4. 临时对象的管理：例如，在一些特定的算法或逻辑中，用于标记某些临时创建的对象。

## map 和 weakmap

Map 是键值对数据结构，其中键可以是任何类型（包括对象）。

```TS
// 创建一个 Map
let myMap = new Map();
// 设置键值对
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
// 获取值
console.log(myMap.get('key1'));
// 检查键是否存在
console.log(myMap.has('key2'));
// 删除键值对
myMap.delete('key1');
// 获取 Map 的大小
console.log(myMap.size);
```

Map 更适合用于需要根据特定键来存储和获取值的场景。

### 与普通的 Map 不同，WeakMap 的键必须是对象

并且这些对象是弱引用的。这意味着如果对象键不再被其他地方引用，那么 WeakMap 中的对应键值对会被自动垃圾回收，不会造成内存泄漏。
WeakMap 常用于以下场景：

1. 私有属性的实现：可以将一些私有数据与对象相关联，同时不影响垃圾回收。
2. 缓存数据：当与对象相关的缓存数据不需要阻止对象被垃圾回收时。

<!-- 弱引用 -->

首先 obj 引用了这个对象 + 1，aahph 也引用了 + 1，wmap 也引用了，但是不会 + 1，应为他是弱引用，不会计入垃圾回收，
因此 obj 和 aahph 释放了该引用 weakMap 也会随着消失的，但是有个问题你会发现控制台能输出，
值是取不到的，
因为 V8 的 GC 回收是需要一定时间的，你可以延长到 500ms 看一看，
并且为了避免这个问题不允许读取键值，也不允许遍历，同理 weakSet 也一样

```ts
let obj: any = { name: '小满zs' } //1
let aahph: any = obj //2
let wmap: WeakMap<object, string> = new WeakMap()
wmap.set(obj, '爱ss') //2 他的键是弱引用不会计数的
// 释放引用
obj = null // -1
aahph = null //-1
//v8 GC 不稳定 最少200ms
setTimeout(() => {
  console.log(wmap)
}, 500)
```

当引用全部被释放时，即被引用的值=null 时，WeakMap 会自动移除相应的键值对。
同理 weakset 也一样
