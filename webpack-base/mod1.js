// export let a = 111;

let a = 11;
let b = 22;
let c = 33;

export {a, b, c};

export function sum(a1, a2) {
  return a1 + a2;
}

export class Person{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    alert(this.name);
  }
}

export default  'XXXXXx';
