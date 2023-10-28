const fs = require("fs");
console.log("Starting");
let p1 = fs.promises.readFile("../Files/f1.txt");
let p2 = fs.promises.readFile("../Files/f2.txt");
let p3 = fs.promises.readFile("../Files/f3.txt");

console.log(p1);

// We need not pass callback - hence inversion of control is resolved.
// then is - listener
p1.then(function (data) {
  console.log(data.toString());
}).catch(function (err) {
  console.log(err);
});

p2.then(function (data) {
  console.log(data.toString());
}).catch(function (err) {
  console.log(err);
});

p3.then(function (data) {
  console.log(data.toString());
}).catch(function (err) {
  console.log(err);
});

// setTimeout(() => {
//   console.log(p1);
// }, 5000);

console.log("Ending");
