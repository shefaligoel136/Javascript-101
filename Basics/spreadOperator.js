// SPREAD OPERATOR: copies values form 1 array to another for the first level

let arr = [1, 2, [3,6], 4, 5];


// le1 arr1 = arr -> will have same reference, so changing arr1 will change arr also.
let arr1 = [...arr];

arr1.pop();
arr1.push(100);

arr1[2][0] = 200;
console.log("arr", arr, "arr1", arr1);


