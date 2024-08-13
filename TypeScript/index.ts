const Base: ClassDecorator = (target) => {
  console.log(target) //
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
