function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function(){
    console.log("Hi i am", this.name)
  }
}

const p1 = Person("p1", 5);

// function constructor
const p2 = new Person("p2", 15);

console.log(p1, p2);

p2.getName()
