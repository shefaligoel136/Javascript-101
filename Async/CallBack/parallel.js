// There can be variations in logs as the code is executed in parallel

const fs = require("fs");
console.log("Starting");
fs.readFile("../Files/f1.txt", function (err, data) {
  if (err) {
    console.log("Error Reading File:", err);
  } else {
    console.log("---I am callback---");
    console.log(data.toString());
  }
});

fs.readFile("../Files/f2.txt", function (err, data) {
  if (err) {
    console.log("Error Reading File:", err);
  } else {
    console.log("---I am callback---");
    console.log(data.toString());
  }
});

fs.readFile("../Files/f3.txt", function (err, data) {
  if (err) {
    console.log("Error Reading File:", err);
  } else {
    console.log("---I am callback---");
    console.log(data.toString());
  }
});
console.log("Ending");
