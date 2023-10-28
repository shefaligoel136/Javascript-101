// PROTOTYPE: Is a property available to every object -> helps its instance to get those property -> inheritance.

Array.prototype.sayLength = function () {
  console.log("Array Length is:", this.length);
};

const arr = [1, 2, 3, 4, 5];
arr.sayLength();

Array.myMethod=function(){
    console.log("I AM DIFFERENT");
}
arr.myMethod();

// ASSIGNMENT - create - use this and myMap

function mapCallBackSquare(ele) {
  return ele * ele;
}

Array.prototype.MyMap = function (cb) {
  const arr = this;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
};

console.log(arr.MyMap(mapCallBackSquare));
