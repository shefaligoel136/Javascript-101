let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// gives you the copy, it copies the elem from SIndex and EIndex-1 .
let slicedArr = arr.slice(2, 3);
console.log("slicedArr", slicedArr, arr);


// modifies original array, startIndex, deleteCount
let splicedArr = arr.splice(2, 3);
console.log("splicedArr", splicedArr, arr);
