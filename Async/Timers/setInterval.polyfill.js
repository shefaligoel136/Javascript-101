/**
 *
 * create polyfill of setInterval with help of setTimeout
 */

function mySetInterval(cb, delay) {
  //   let flag = true;
  let obj = {
    flag: true,
  };
  function fn() {
    if (obj.flag) {
      cb();
      setTimeout(fn, delay);
    }
  }
  setTimeout(fn, delay);
  return obj;
}

function clearMyInterval(obj) {
  obj.flag = false;
}

function cb() {
  console.log("I will be called on every interval");
}

let obj = mySetInterval(cb, 1000);

function clearCb() {
  clearMyInterval(obj);
}

setTimeout(clearCb, 3000);
