/**
 *
 * Sync code - that executes line by line
 *
 */

console.log("Before...sync");
function sync() {
  console.log("I am sync");
}
sync();
console.log("After...sync");

/**
 *
 * Async code - piece of code is executed at current point of time, and a part is executed later
 *
 */

console.log("Before...async");
function async() {
  console.log("I am async");
}
setTimeout(async, 2000);
console.log("After...async");
