
// Function definition
function fn(a,b){
    console.log("Hello I am fn", a*b);
}

console.log(fn);

// Function invocation
let res = fn(3,4);
console.log(res)

// Add props on that fn

fn.myProp = 10;
fn.myFun = function(){console.log("hello my func")};

console.log(fn);

// fn is an object that can be called.