// ECMAScript 的内置对象
// Boolean、Number、string、RegExp、Date、Error
let b: Boolean = new Boolean(1)
console.log(b)
let n: Number = new Number(true)
console.log(n)
let s: String = new String('哔哩哔哩关注小满zs')
console.log(s)
let d: Date = new Date()
console.log(d)
let r: RegExp = /^1/
console.log(r)
let e: Error = new Error('error!')
console.log(e)

let local: Storage = localStorage
let div: NodeListOf<HTMLDivElement> = document.querySelectorAll('div')
