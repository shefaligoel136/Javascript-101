function printThis(){
    console.log(this); // prints globalThis value only
}

printThis();

let obj = {a:10, b:"qwerty"};

let fn = printThis.bind(obj);

console.log("-------");

fn();


// we do not put fn inside obj, but still 'this' of fn points to obj now

 
