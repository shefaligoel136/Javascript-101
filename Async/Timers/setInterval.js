/**
 *
 * SET INTERVAL
 *
 * CLEAR INTERVAL
 * 
 * 
 * when canceller is hoisted it gets clouser over it's outer variable - timerId - 
 * so even if global execution is removed, canceller will always have access to timerId.
 * 
 * precedence of setTimeout is > to setInterval
 *
 */

console.log("Before");

function cb() {
  console.log("TIME STAMP IS - INTERVAL CALLED", Date.now());
}

const timerId = setInterval(cb, 1000);

function canceller() {
  console.log("CANCEL INTERVAL");
  clearTimeout(timerId);
}

setTimeout(canceller, 3000);
console.log("After");
