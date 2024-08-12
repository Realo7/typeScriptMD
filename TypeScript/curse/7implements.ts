// interface 用来定义接口
// class用来定义类
// implements用来实现interface功能
// extends用来继承class

// //2. class 的修饰符 readonly  private protected public
// //3. super 原理
// //4. 静态方法
// //5. get set
interface Options {
  el: string | HTMLElement
}
interface vueCls {
  options: Options
  init(): void
}
interface Vnode {
  tag: string //div section header
  text?: string
  children?: Vnode[]
}
class Dom {
  creatElement(el?: string): HTMLElement {
    return document.createElement(el)
  }
  setText(el: HTMLElement, text: string | null) {
    el.textContent = text
  }
  render(data: Vnode) {
    let root = this.creatElement(data.tag)
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach((item, index) => {
        console.log(item, index)
        let child = this.render(item)
        this.setText(child, item.text ?? null)
        root.appendChild(child) //star
      })
    } else {
      this.setText(root, data.text)
    }
    console.log('返回的root', root)

    return root
  }
}

class Vue extends Dom implements vueCls {
  options: Options
  constructor(options: Options) {
    super()
    this.options = options
    this.init()
  }
  init(): void {
    let data: Vnode = {
      tag: 'div',
      text: '我是根节点',
      children: [
        {
          tag: 'div',
          text: '我是子节点1',
          children: [
            { tag: 'div', text: '我是2子节点1', children: [] },
            { tag: 'div', text: '我是2子节点2', children: [] },
            { tag: 'div', text: '我是2子节点3', children: [] },
          ],
        },
        { tag: 'div', text: '我是子节点2', children: [] },
      ],
    }

    let app =
      typeof this.options.el == 'string'
        ? document.querySelector(this.options.el)
        : this.options.el
    let add = this.render(data)
    console.log(add)

    app.appendChild(add)
  }
}

new Vue({ el: '#app' })
// class vue1 extends Vue {
//   a: Options = { el: '111' }
//   constructor() {
//     super(a)
//   }
// }
