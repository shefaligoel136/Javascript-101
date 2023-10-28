const fs = require("fs");
console.log("Starting");

async function fn() {
  try {
    let p1 = fs.promises.readFile("../Files/f1.txt");
    let p2 = fs.promises.readFile("../Files/f2.txt");
    let p3 = fs.promises.readFile("../Files/f3.txt");

    let dataP1 = await p1;
    console.log("p1", dataP1.toString());

    let dataP2 = await p2;
    console.log("p2", dataP2.toString());

    let dataP3 = await p3;
    console.log("p3", dataP3.toString());
  } catch (err) {
    console.log(err.message);
  }
}

fn();

console.log("Ending");

