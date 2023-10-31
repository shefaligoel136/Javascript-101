//-----------------> Q1

// let jhon={};
// jhon.age=25;
// console.log("John 5", jhon);
// jhon=null;
// console.log("John 7", jhon);

//-----------------> Q2

// let jhon = {};

// jhon.age = 25;
// let arr = [jhon];
// console.log("John 13", jhon, arr);
// arr[0] = null;
// jhon = null;
// console.log("John 15", jhon, arr);
// console.log("John 17", arr[0], arr);

//-----------------> Q3 Map and strong references

let john = { name: "John" };

let map = new Map();
map.set(john, "hi");
console.log("in map", map);
for (let [key, ele] of map) {
  console.log("key: ", key, ", val: ", ele);
}
john = null;
console.log("in map", map);

console.log("48", map.get(john)); // inside map but no way to access it, but map will have data = to solve this we have weak map

for (let [key, ele] of map) {
  console.log("key: ", key, ", val: ", ele);
}

//-----------------> Q3 WeakMap : In weakMap you cannot have primitives a key
/*    
        weakMap.set(key, value)
        weakMap.get(key)
        weakMap.delete(key)
        weakMap.has(key)
*/

// let john = { name: "John" };
// let john2 = { name: "steve" };
// let weakMap = new WeakMap();
// weakMap.set(john, "hi");
// weakMap.set(john2, "Bi");
// john = null;
// console.log("in map", weakMap);
// console.log("48", weakMap.get(john)); // since john is made null this will come undefined, and map will also not have data
// console.log("48", weakMap.get(john2));

// let weakMaps = new WeakMap();
// weakMaps.set("100", "hello");
