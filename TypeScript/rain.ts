let promist: Promise<number> = new Promise((resolve, reject) => {})

let canvas: HTMLCanvasElement = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
canvas.width = window.innerWidth

canvas.height = window.innerHeight

let str: string[] = 'ssssxaczcasdsadasdasdas'.split('')

let arr0: number[] = [1, 23, 432, 21, 432]
let arr01 = Array(Math.ceil(canvas.width)).fill(0)
console.log(arr01)

const rain = () => {
  ctx.fillStyle = 'rgba(0,0,0,0.05)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#0f0'
  arr01.forEach((item, index) => {
    ctx.fillText(
      str[Math.floor(Math.random() * str.length)],
      index + 10,
      item + 10
    )
    arr01[index] =
      item >= canvas.height || item > 10000 * Math.random() ? 0 : item + 10 //添加随机数让字符随机出现不至于那么平整
  })
}
window.addEventListener('resize', function () {
  const width = window.innerWidth
  console.log(`窗口宽度发生变化，当前宽度为: ${width} 像素`)
  arr01 = Array(width).fill(0)
  setInterval(rain, 220)
})

setInterval(rain, 220)
