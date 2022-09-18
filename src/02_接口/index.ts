
// 接口是对象的状态(属性)和行为(方法)的抽象(描述)
(() => {
  // 1.基础用法
  // 定义一个接口
  interface IPerson {
    // 只读属性
    readonly id: number
    name: string
    age: number
    // 可选属性
    sex?: string
  }
  const p1: IPerson = {
    id: 1,
    name: 'tom',
    age: 20
  }
  console.log(p1);

  // 2.函数类型
  /* 
  接口可以描述函数类型(参数的类型与返回的类型)
  */

  // 定义接口，函数返回值为布尔值
  interface SearchFunc {
    (source: string, subString: string): boolean
  }
  const mySearch: SearchFunc = function (source: string, sub: string): boolean {
    return source.search(sub) > -1
  }

  console.log(mySearch('abcd', 'bc'))

  // 3.类类型
  /* 
  类类型: 3.1实现接口
  1. 一个类可以实现多个接口
  2. 一个接口可以继承多个接口
  */

  interface Alarm {
    alert(): any;
  }

  interface Light {
    lightOn(): void;
    lightOff(): void;
  }

  class Car implements Alarm {
    alert() {
      console.log('Car alert');
    }
  }

  // 3.2一个类可以实现多个接口
  class Car2 implements Alarm, Light {
    alert() {
      console.log('Car alert');
    }
    lightOn() {
      console.log('Car light on');
    }
    lightOff() {
      console.log('Car light off');
    }
  }
  // 3.3接口继承接口
  interface LightableAlarm extends Alarm, Light {

  }
})()