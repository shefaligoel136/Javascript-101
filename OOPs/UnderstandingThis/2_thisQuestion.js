// FUNCTION

console.log("NORMAL FUNCTION CALL");
console.log();


const cap = {
  name: "Steve",
  sayHi: function () {
    console.log("1", this.name);
    function iAmInner() {
      console.log("2", this.name);
    };
    console.log("Before calling inner");
    iAmInner();
    console.log("3", this.name);
  },
};
global.name = "loki";
cap.sayHi();
console.log(this);

console.log();
console.log("---------------------------------------------");
console.log();

// ARROW FUNCTION - does not have it's own this -> it takes from outer scope -> lexical scope

console.log("ARROW FUNCTION CALL");
console.log();


const capArrow = {
  name: "Steve",
  sayHi: () => {
    console.log("1. capArrow. ", this);
    const iAmInner = () => {
      console.log("2. capArrow. ", this);
    };
    console.log("Before calling inner");
    iAmInner();
    console.log("3. capArrow. ", this);
  },
};
global.name = "loki";
capArrow.sayHi();
console.log(this, global);
