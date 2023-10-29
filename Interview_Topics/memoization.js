function calc(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function memoize(fn) {
  let cache = {};
  return function (n) {
    let isInputPresent = Object.keys(cache).includes(n);
    if (isInputPresent) {
      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

let efficientCalcFn = memoize(calc);
console.time();
efficientCalcFn(5);
console.timeEnd();

console.time();
efficientCalcFn(5);
console.timeEnd();
