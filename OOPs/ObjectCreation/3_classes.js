class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName() {
    console.log("Hi I am", this.name);
  }

  //   getter in class

  get nameFirst() {
    return this.name.split(" ")[0];
  }

  set nameFirst(value) {
    const nameArr = this.name.split(" ");
    nameArr[0] = value;
    this.name = nameArr.join(" ");
  }
}

const p1 = new Person("Shefali Goel", 21);

p1.printName();

console.log(p1.nameFirst);
p1.nameFirst = "Shef";
p1.printName();

class SuperHuman extends Person {
  constructor(name, age) {
    super(name, age);
  }
  sayHi() {
    console.log(`I am ${this.name}, and ${this.age} years old`);
  }
}

const superHuman = new SuperHuman("Shefali", 24);
console.log("superHuman", superHuman.sayHi());
