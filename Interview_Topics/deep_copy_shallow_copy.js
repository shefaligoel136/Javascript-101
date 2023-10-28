/*

    array, object -> two types of values -> primitives(value), non-primitives(reference)
    assignments(send same thing, nothing is replicated -> (arr1 = arr)) -> 
                    values -> are not copied
                    reference -> are not copied

*/

// ------------------------------------------------------------------------------------

/*

    shallow copy: (spread operator -> arr1 = [...arr] only 1st layer is copied [1,2,3[6,7],4,5])
                values -> copied, and will have diff memory
                ref -> new ref will be created but the value inside the ref will be pointing towards same location.

*/

// ------------------------------------------------------------------------------------

/*
    Objects.assign -> shallow copy
*/

let person = {
  firstName: "test",
  lastName: "user",
  address: {
    street: "tester hub",
    city: "test city",
    state: "testing",
    country: "test",
  },
};

let copiedObject = Object.assign({}, person);

copiedObject.lastName = "tester";
copiedObject.address.state = "tester state";

console.log(person, copiedObject);

/*

    Deep Copy: JSON.stringify and JSON.parse

*/

let personDeep = {
  firstName: "test",
  lastName: "user",
  address: {
    street: "tester hub",
    city: "test city",
    state: "testing",
    country: "test",
  },
};

// copy object to string
let stringPersonDeep = JSON.stringify(personDeep);
let deepCloned = JSON.parse(stringPersonDeep);

deepCloned.lastName = "tester";
deepCloned.address.state = "tester state";

console.log(deepCloned, personDeep);
