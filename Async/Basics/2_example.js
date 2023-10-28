console.log("Before");

setTimeout(() => {
    // THIS WILL NOT EXECUTE
  console.log("I will run after some time");
}, 1000); // 1 sec

console.log("After");

while (true) {}
