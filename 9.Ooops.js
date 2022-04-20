console.log(`CLASS`);
class Student {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  //instance method
  classMethod() {
    return `${this.name}, ${this.age}`;
  }
}

// class Syntax {
//   static displayMessage() {
//     return "static method called";
//   }
// }
// console.log(Syntax.displayMessage());

class Players extends Student {
    constructor(name, age,game){
        super(name, age)
        this.game=game
    }
  //instance method
  playerMethod() {
      console.log(`${this.name}, ${this.age}, ${this.game}`);
    return `${super.classMethod()}, ${this.game}`
  }
}
const obj1 = new Student("pavan", 24);
console.log(obj1.classMethod());
const obj2 = new Student("sai", 25);
console.log(obj2.classMethod());
const obj3 = new Players("durga", 25,'cricket');
console.log(obj3.playerMethod());
