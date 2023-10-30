/**
 *
 * SET TIMEOUT - wait for call stack to be empty
 *
 * CLEAR TIMEOUT
 *
 */

console.log("Before");

function cb() {
  console.log("SET TIMEOUT CB");
}

const timerId = setTimeout(cb, 3000);

function canceller() {
  console.log("CANCEL TIMEOUT");
  clearTimeout(timerId);
}

setTimeout(canceller, 2000);
console.log("After");

