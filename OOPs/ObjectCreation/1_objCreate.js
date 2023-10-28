let a = {
  p: 10,
};

// b is created with a, and it inherits property of a
let b = Object.create(a);
console.log(a, b);
console.log(b.p);
console.log(b.isPrototypeOf(a));

b.p = 20;
// it will override p property in b which is inherited from a, but can't change p in a.

console.log(a, b);
console.log(b.isPrototypeOf(a));
console.log(a.isPrototypeOf(b));
