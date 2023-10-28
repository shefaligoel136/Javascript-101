console.log("Before");
let a = true;
setTimeout(() => {
  // THIS WILL NOT EXECUTE
  a = false;
  console.log("I will run after some time");
}, 1000); // 1 sec

console.log("After");

while (a) {}
