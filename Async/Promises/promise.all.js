const fs = require("fs");
console.log("Starting");
let p1 = fs.promises.readFile("../Files/f1.txt");
let p2 = fs.promises.readFile("../Files/f2.txt");

const combined = Promise.all([p1, p2]);

combined.then(function (resultArr) {
  console.log("result",resultArr);
});
