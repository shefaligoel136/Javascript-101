/*
*
    let arr=[] -> Array
    let obj={} -> Object
    function fn(){} -> Functions

    call, apply, bind are available on 'Functions'.
*
*/

// --------------------------------------------------------- call Basic ---------------------------------------------

let cap = {
  name: "Steve",
  team: "Cap",
  petersTeam: function (arg1, arg2, ...arg) {
    console.log(
      `Hey I am ${this.name} from team ${this.team} also others are ${arg1}, ${arg2} and ${arg}`
    );
  },
};

let ironMan = {
  name: "IronMan",
  team: " Iron Man",
};

// cap.petersTeam.call(ironMan, "pepper", "pots");

// --------------------------------------------------------- building polyfill of call ---------------------------------------------

Function.prototype.polyCall = function (context, ...args) {
  // console.log("Hi call is invoked", this);
  //   console.log(this);
  let reqFn = this;

  //   add this(reqFn) to your context(ironMan)
  context.reqFn = reqFn;

  context.reqFn(...args);
};

cap.petersTeam.polyCall(ironMan, "poly", "call", "great!");

// --------------------------------------------------------- building polyfill of apply ---------------------------------------------

Function.prototype.polyApply = function (context, args) {
  let reqFn = this;
  context.reqFn = reqFn;
  context.reqFn(...args);
};

cap.petersTeam.polyApply(ironMan, ["poly", "call", "great!", "I am good"]);

// --------------------------------------------------------- building polyfill of bind ---------------------------------------------

Function.prototype.polyBind = function (context) {
  const reqFn = this;
  return function (...args) {
    reqFn.call(context, ...args);
    reqFn.apply(context,args);
  };
};

const boundFn = cap.petersTeam.polyBind(ironMan);
boundFn("poly", "call", "great!", "I am good");
