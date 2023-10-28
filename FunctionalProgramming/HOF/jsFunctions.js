let arr = [1, 2, 3, 4, 5];

// 1.a. MAP

function square(value) {
  return value * value;
}

let newArr = arr.map(square);

console.log("NewArr", newArr);

// 1.b. MAP SELF IMPLEMENTATION

function fnCalSquare(arr, cb) {
  let newSelfArr = [];
  for (let i = 0; i < arr.length; i++) {
    newSelfArr.push(cb(arr[i]));
  }
  return newSelfArr;
}

console.log("NewSelfArr", fnCalSquare(arr, square));

// 2.a. FILTER FUNCTION

function filter(ele) {
  return ele % 2 === 1;
}

let onlyOdd = arr.filter(filter);

console.log("onlyOdd", onlyOdd);

// 2.b. SELF FILTER FUNCTION

function fnSelfFilter(arr, cb) {
  let newSelfArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newSelfArr.push(arr[i]);
    }
  }
  return newSelfArr;
}

console.log("selfOnlyOdd", fnSelfFilter(arr, filter));


// 3.a. REDUCE FUNCTION.

function sumOf2Number(acc,ele){
    return acc+ele;
}

function prodOf2Number(acc,ele){
    return acc*ele;
}

let sum = arr.reduce(sumOf2Number);
let prod = arr.reduce(prodOf2Number);

console.log("sum", sum);
console.log("prod", prod)


// 3.b. SELF REDUCE FUNCTION

function selfReduceFunction(arr, cb){
    let acc = 0;
    for(let i=0;i<arr.length;i++){
        acc = cb(acc, arr[i]);
    }
    return acc;
}

console.log("Self Reduce sum", selfReduceFunction(arr,sumOf2Number));