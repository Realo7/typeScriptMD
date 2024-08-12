// interface 用来定义接口
// class用来定义类
// implements用来实现interface功能
// extends用来继承class
class Dom1 {
    creatElement(el) {
        return document.createElement(el);
    }
    setText(el, text) {
        el.textContent = text;
    }
    render(data) {
        let root = this.creatElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach((item, index) => {
                var _a;
                console.log(item, index);
                let child = this.render(item);
                this.setText(child, (_a = item.text) !== null && _a !== void 0 ? _a : null);
                root.appendChild(child); //star
            });
        }
        else {
            this.setText(root, data.text);
        }
        console.log('返回的root', root);
        return root;
    }
}
class Vue1 extends Dom1 {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        let data = {
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
        };
        let app = typeof this.options.el == 'string'
            ? document.querySelector(this.options.el)
            : this.options.el;
        let add = this.render(data);
        console.log(add);
        app.appendChild(add);
    }
}
new Vue1({ el: '#app' });
// class vue1 extends Vue {
//   a: Options = { el: '111' }
//   constructor() {
//     super(a)
//   }
// }
