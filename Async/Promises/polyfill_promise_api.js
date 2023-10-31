/**
 *
 * build polyfill for this ->
 */

// function promSetTimeout(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("Hey then");
//     }, delay);
//   });
// }

// promSetTimeout(1000).then((data) => {
//   console.log(data);
// });

const executor = (resolve, reject) => {
  setTimeout(function () {
    resolve("Hey then");
    // reject("Hey then");
  }, 1000);
};

// const promise = new Promise(executor);
// console.log("Promise", promise);

// promise.then((data) => console.log("data", data));

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function CustomPromise(executor) {
  //    1. add required properties and methods
  // promise does not expose these properties
  let state = PENDING;
  let value = undefined;

  let scbArray = [];
  let fcbArray = [];

  // it will be attached to your object

  // 2 attach resolve and reject
  const resolve = (value) => {
    if (state != PENDING) return;
    state = RESOLVED;
    value = value;
    // scb
    scbArray.forEach((cbs) => {
      cbs(value);
    });
  };
  const reject = (err) => {
    if (state != PENDING) return;
    state = REJECTED;
    value = err;
    // fcb
    fcbArray.forEach((cbs) => {
      cbs(value);
    });
  };

  this.then = (cb) => {
    if (state === RESOLVED) {
      cb(value);
    } else {
      scbArray.push(cb);
    }
  };

  this.catch = (cb) => {
    if (state === REJECTED) {
      cb(value);
    } else {
      fcbArray.push(cb);
    }
  };

  executor(resolve, reject);
}

const customPromise = new CustomPromise(executor);

const cb = (data) => {
  console.log(data);
};

customPromise.then(cb);
customPromise.then((data) => console.log("I am second then", data));

customPromise.catch((err) => console.log("err", err));
