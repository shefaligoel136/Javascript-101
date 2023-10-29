// 1. Object with no parent - null

let obj = Object.create(null);
obj.name = "Shefali";
console.log(obj);

// 2. Object from another object

let obj2 = Object.create(obj);
obj2.year = 1999;
console.log(obj2.name);

for (let key in obj2) {
  console.log("key", key);
}


/**
 * 
 * object.keys() gives array of keys
 */