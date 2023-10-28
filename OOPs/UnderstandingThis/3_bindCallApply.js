const cap = {
  name: "Steve",
  sayHi: function () {
    console.log("1", this.name);
    function iAmInner() {
      console.log("2", this.name);
    }
    console.log("Before calling inner");
    iAmInner();
    console.log("3", this.name);
  },
  a: 10,
  b: 20,
  print: function (args1, args2) {
    console.log(args1, args2);
  },
};
const addSayHi = cap.sayHi;

console.log();
console.log("----<0 NORMAL>----");
console.log();

addSayHi(); // this now points to global this.

// HENCE WE HAVE A METHOD CALLED BIND - bind returns a function that is bound to an object that you pass to it.

console.log();
console.log("----<1 BIND - 1>----");
console.log();

const boundFn = cap.sayHi.bind(cap);
boundFn();

console.log();
console.log("----<2 BIND - 2>----");
console.log();

const ironManName = {
  name: "iron Man",
};

const ironManBoundFn = cap.sayHi.bind(ironManName);
ironManBoundFn();

// CALL

/**/ console.log();
/**/ console.log("----<1 CALL - 1>----");
/**/ console.log();

cap.sayHi.call(ironManBoundFn);

// APPLY

/**/ console.log();
/**/ console.log("----<1 APPLY - 1>----");
/**/ console.log();

cap.print.apply(cap, [1, 2]);
