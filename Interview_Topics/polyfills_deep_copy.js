let person = {
  firstName: "test",
  lastName: "user",
  address: {
    street: "tester hub",
    city: "test city",
    state: "testing",
    country: "test",
  },
  friends: ["abc", "def", "asd", { name: "ray", name: "sun" }],
};

function superClone(obj) {
  // return you a new copied object
  let newObj = {};
  //   copy all keys and value
  for (let key in obj) {
    let isKeyObj = typeof obj[key];
    if (isKeyObj === "object") {
      let newSmallObj = superClone(obj[key]);
      newObj[key] = newSmallObj;
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let deepClonedObj = superClone(person);

deepClonedObj.lastName = "tester";
deepClonedObj.address.state = "tester state";

console.log("person", person);
console.log("copy", deepClonedObj);
