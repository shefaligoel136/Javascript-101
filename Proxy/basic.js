// what a proxy -> ?? it intercepots and modify get and set of an object

let obj = { eng: "Hello", eng2: "hi" };

let handler = {
  get(target, prop) {
    console.log("10", target, prop);
    return target[prop].toUpperCase();
  },
  set(target, prop, receiver) {
    if (prop in target) {
      // limiting to updating property value, and not adding any new.
      target[prop] = receiver;
      return true;
    } else {
      throw new Error("Cannot add new property");
    }
  },
};
let proxy = new Proxy(obj, handler);
console.log("eng1", proxy.eng);
proxy.eng2 = "Hola";
console.log(proxy);
