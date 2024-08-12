let obj = {
  name: '小满',
  age: 25,
  city: 'mumbai',
  country: 'india',
}
type Key = keyof typeof obj
// type Key = 'name' | 'age' | 'city' | 'country'
console.log(typeof obj)
interface Data {
  name: string
  age: number
  sex: string
}
type Options1<T extends object> = {
  readonly [K in keyof T]?: T[K]
}
type B1 = Options1<Data>
