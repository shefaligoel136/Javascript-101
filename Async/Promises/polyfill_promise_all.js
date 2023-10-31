Promise.myPromiseAll = function (arrayOfPromise) {
  return new Promise(function (resolve, reject) {
    let unResolved = arrayOfPromise.length;
    const resolvedPromise = [];
    if (unResolved === 0) {
      // if array is empty
      resolve(arrayOfPromise);
      return;
    }

     //  what does a promise represent  : future value of the task that has already started
        // async await -> iterate over the array -> if the value is not resolved -> await
    arrayOfPromise.forEach(async (promise) => {
      try {
        const value = await promise;
        resolvedPromise.push(value);
        unResolved--;
        if (unResolved === 0) {
          resolve(resolvedPromise);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
};

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("foo");
    resolve("foo");
  }, 100);
});

Promise.myPromiseAll([p0, p1, p2]).then(console.log, console.log);
