/*

-----1----

*/

console.log(this);
console.log(global);
console.log(this == globalThis);

/*

-----2----

*/

function printThis() {
  console.log(this);
  console.log(this == globalThis);
}

printThis();

let obj = {
  fn: printThis,
};

console.log(obj.fn, typeof obj.fn);


/*

-----3----

*/

const cap = {
  name: "shefali",
  sayHi: function () {
    console.log("hi", this.name);
  },
  callThis: function () {
    console.log("this", this, this === cap);
  },
};

cap.sayHi();
cap.callThis();


/*

-----4----

*/

const cap2 = {
  name: "shefali",
  sayHi: function () {
    console.log("hi cap 2", this.name);
  },
  callThis: function () {
    console.log("this cap 2", this, this === cap, this === global);
  },
};

global.name = "Hello World"
const addressCap2Hi = cap2.sayHi;
const addressCap2This = cap2.callThis;

addressCap2Hi();
addressCap2This();
