/**
 *
 * Map and object used to store data in key and value pair
 *
 * When you have lot update / delete -> amount of data set -> Use Map
 *
 */

const print = console.log;

// object
let cap = {
  name: "steve",
  age: 35,
};

print("cap", cap);

// map
const personMap = new Map();

personMap.set("name", "Steve");
personMap.set("age", 35);

print("map", personMap);

personMap.delete("age");

print("map", personMap);

// --------------------------> 1. ITERATION <-----------------

// you can iterate over map, but not over object -> therefore we can use all higher order function of map on arrays also

personMap.forEach((ele, key) => {
  print("key: ", key, ", val: ", ele);
});

for (let [key, ele] of personMap) {
  print("key: ", key, ", val: ", ele);
}

for (let key in personMap) {
  print("val hashmap for..in", map[key]);
  //   will not work for hashmap
}

for (let key in cap) {
  print("val obj for..in", cap[key]);
}

// --------------------------> 2. SIZE <-----------------

print("size obj", Object.keys(cap).length);
print("size map", personMap.size);

// ---------------------------> NOTE <------------------------
/**
 *
 * In map key can be of any type,
 * In object key can only be - String, Number or Symbol
 * UseCase : when you want to store properties with a key that has some metadata
 *
 */
//

const user1 = { id: 1, name: "Alice" };
const user2 = { id: 2, name: "Bob" };
const user3 = { id: 3, name: "Charlie" };

//  extended data
let preferencesObj1 = { theme: "dark", language: "en" };
let preferencesObj2 = { theme: "light", language: "fr" };
let preferencesObj3 = { theme: "dark", language: "de" };

let preferenceMap = new Map();

preferenceMap.set(user1, preferencesObj1);
preferenceMap.set(user2, preferencesObj2);
preferenceMap.set(user3, preferencesObj3);

console.log("first Users name", user1.name);
console.log("first users preference", preferenceMap.get(user1));
print("preferenceMap", preferenceMap);

// --------------------------> 2. MAP CANNOT BE STRINGIFIED <-----------------

print(cap);
print(personMap);

print("````````````````");
let strMap = JSON.stringify(personMap);
console.log("strMap: ", strMap);
print("````````````````");
let strObj = JSON.stringify(cap);
print("strObj: ", strObj);
