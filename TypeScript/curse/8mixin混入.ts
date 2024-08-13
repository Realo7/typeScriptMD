// smartObject继承了Disposable和Activatable2个中的属性和方法

// Disposable Mixin
class Disposable {
  isDisposed: boolean
  dispose() {
    this.isDisposed = true
  }
}

// Activatable Mixin
class Activatable {
  isActive: boolean
  activate() {
    this.isActive = true
  }
  deactivate() {
    this.isActive = false
  }
}

class SmartObject implements Disposable, Activatable {
  // 此处再次声明是因为ts会报错，实际上通过下面的applymixin函数全都能传过来
  // Disposable
  isDisposed: boolean = false
  dispose: () => void
  // Activatable
  isActive: boolean = false
  activate: () => void
  deactivate: () => void
  constructor() {
    console.log(this.isActive + ' : ' + this.isDisposed)
  }
  [Symbol.dispose](): void {
    throw new Error('Method not implemented.')
  }
  interact() {
    this.activate()
  }
}

applyMixins(SmartObject, [Disposable, Activatable])
let app = new SmartObject()
console.log(app)

let smartObj = new SmartObject()
setTimeout(() => smartObj.interact(), 1000)

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name]
    })
  })
}
// 案例2 结合上面applyMixins
class Mixin1 {
  method1() {
    console.log('Method 1 from Mixin1')
  }
}

class Mixin2 {
  method2() {
    console.log('Method 2 from Mixin2')
  }
}

class DerivedClass {}

applyMixins(DerivedClass, [Mixin1, Mixin2])

const instance: any = new DerivedClass()
instance.method1() //Method 1 from Mixin1
instance.method2() //Method 2 from Mixin2
