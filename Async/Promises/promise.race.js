const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

// which ever promise is resolved/rejected first you will get ans from that promise

Promise.race([firstPromise, secondPromise])
  .then((res) => console.log("res", res))
  .catch((rej) => console.log("rej", rej));
