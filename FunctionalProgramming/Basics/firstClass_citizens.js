let obj = { name: "Shefali" };
let obj2 = obj;

// I can save address of obj/var in another variable

console.log(obj2);


// fn statements

function fn(){}

// fn expression

let fnAdd = function(){
    console.log("I am an expression")
}

// 2nd Aspect pass obj as parameter - JS IS PASS BY VALUE

function fn(param){
    console.log("I am an object", param);
}

fn(obj);
fn(fnAdd);