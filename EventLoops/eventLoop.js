console.log("A.. sync task");

requestAnimationFrame(function () {
  console.log("B.. UI");
});

setTimeout(() => {
  console.log("C.. set time out");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("E.. micro task");
  })
  .then(function () {
    console.log("F.. micro task");
  });

console.log("E.. sync task");
