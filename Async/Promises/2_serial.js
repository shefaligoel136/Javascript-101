const fs = require("fs");
console.log("Starting");
let p1 = fs.promises.readFile("../Files/f1.txt");

// CHAINING IN PROMISES

p1.then(function (data) {
  console.log(data.toString());
  return fs.promises.readFile("../Files/f2.txt");
})
  .then(function (data) {
    console.log(data.toString());
    return fs.promises.readFile("../Files/f3.txt");
  })
  .then(function (data) {
    console.log(data.toString());
  })
  .catch(function (err) {
    console.log(err);
  });

console.log("Ending");
