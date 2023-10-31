// you can choose which data you want to make accessible
// and what to hide

// ************** ---- way 1. using export on each variable/fn ----- *****
// let abc = "Hello";

// export function fn() {
//     console.log("Hi I am Fn");
// }

// export var a = 10;


// **************** ---- way 2. export {} ---- *********
// let abc = "Hello";
// function fn() {
//     console.log("Hi I am Fn");
// }
// var a = 10;

// export { a, fn };

/************default export **************/


let abc = "Hello";
var a = 10;
let anotherVariable = "another";
function fn() {
  console.log("Hi I am Fn", abc);
}
console.log("Hi i am lib module");

// named exports
export { a, fn };
// if anyone imports my file -> by default my anothervar -> exported
// there only one default in a file
export default anotherVariable;
