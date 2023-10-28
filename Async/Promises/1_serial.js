const fs = require("fs");
console.log("Starting");
let p1 = fs.promises.readFile("../Files/f1.txt");

p1.then(function (data) {
  console.log(data.toString());
  let p2 = fs.promises.readFile("../Files/f2.txt");
  p2.then(function (data) {
    console.log(data.toString());
    let p3 = fs.promises.readFile("../Files/f3.txt");
    p3.then(function (data) {
      console.log(data.toString());
    }).catch(function (err) {
      console.log(err);
    });
  }).catch(function (err) {
    console.log(err);
  });
}).catch(function (err) {
  console.log(err);
});

console.log("Ending");
