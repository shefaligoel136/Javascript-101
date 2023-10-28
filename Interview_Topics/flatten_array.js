let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

// output should be -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function flattenArr(arr) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ans.push(...flattenArr(arr[i]));
    } else {
      ans.push(arr[i]);
    }
  }

  return ans;
}

console.log(flattenArr(input));
