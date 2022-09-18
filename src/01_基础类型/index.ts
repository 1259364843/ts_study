// 基础类型
(() => {
  // 1.布尔值
  let isDone: boolean = false;
  isDone = true;
  console.log(isDone);
  // 2.数字类型
  let a1: number = 10 // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1, a2, a3, a4,);
  // 3.字符串
  let name: string = 'tom'
  name = 'jack'
  let age: number = 12
  // 字符串拼接
  console.log(`My name is ${name}, I am ${age} years old!`);
  // 4.undefined 和 null
  let u: undefined = undefined
  let n: null = null
  console.log(u, n);

  // 5.数组
  // 5.1
  let list1: number[] = [1, 2, 3]
  // 5.2数组泛型，Array<元素类型>
  let list2: Array<number> = [1, 2, 3]
  console.log(list1, list2);

  // 6.元组 Tuple
  // 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
  // 元组中数据的类型的位置和个数应该和定义时一致
  let t1: [string, number]
  t1 = ['hello', 10] // OK
  // t1 = [10, 'hello'] // Error
  console.log(t1[0].substring(1))

  // 7.enum 类型是对 JavaScript 标准数据类型的一个补充
  // 枚举类型提供的一个便利是你可以由枚举的值得到它的名字
  enum Color {
    Red,
    Green,
    Blue
  }
  // 枚举数值默认从0开始依次递增
  // 根据特定的名称得到对应的枚举数值
  let myColor: Color = Color.Green  // 0
  console.log(myColor, Color.Red, Color.Blue)
  // 默认情况下，从 0 开始为元素编号。可以手动的指定成员的数值
  enum Names { '张三' = 1, '李四' = 2, '王五' = 4 }
  let c: string = Names[1]
  console.log(c);


  // 8.any
  // 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 
  // 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 
  // 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
  let notSure: any = 4
  notSure = 'maybe a string'
  notSure = false // 也可以是个 boolean
  let list: any[] = [1, true, 'free']
  list[1] = 100

  // 9.void
  // 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。 
  // 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
  /* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
  function fn(): void {
    // 表示该函数没有任何返回值
    console.log('fn()')
    // return undefined
    // return null
    // return 1 // error
  }
  // 声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null
  let unusable: void = undefined

  // 10.object
  // object 表示非原始类型，也就是除 number，string，boolean之外的类型
  function fn2(obj: object): object {
    console.log('fn2()', obj)
    return {}
    // return undefined
    // return null
  }
  console.log(fn2(new String('abc')))
  console.log(fn2(String))

  // 11.联合类型
  // 联合类型（Union Types）表示取值可以为多种类型中的一种
  // 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
  function getStr(str: string | number): string {
    return str.toString()
  }

  // 12.类型断言
  /* 
  类型断言(Type Assertion): 可以用来手动指定一个值的类型
  语法:
      方式一: <类型>值
      方式二: 值 as 类型  tsx中只能用这种方式
  */

  /* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
  function getLength(x: number | string) {
    if ((<string>x).length) {
      return (x as string).length
    } else {
      return x.toString().length
    }
  }
  console.log(getLength('abcd'), getLength(1234))

  // 13.类型推断
  // 类型推断: TS会在没有明确的指定类型的时候推测出一个类型
  // 有下面2种情况: 1. 定义变量时赋值了, 推断为对应的类型. 2. 定义变量时没有赋值, 推断为any类型
  /* 定义变量时赋值了, 推断为对应的类型 */
  let b9 = 123 // number
  // b9 = 'abc' // error

  /* 定义变量时没有赋值, 推断为any类型 */
  let b10  // any类型
  b10 = 123
  b10 = 'abc'
})()