function fn(inpObj) {
  let handler = {
    get(target, prop) {
      // console.log("10", target, prop, reciever);
      return target[prop].toUpperCase();
    },
    set(target, prop, reciever) {
      if (prop in target) {
        target[prop] = reciever;
        return true;
      } else {
        throw new Error("Cannot add new property");
      }
    },
  };
  let proxyObj = new Proxy(inpObj, handler);
  return proxyObj;
}

// directly pass the object without having any references
let obj = fn({ eng: "Hello", eng2: "hi" });

console.log("eng1", obj.eng);
obj.eng2 = "Hola";
console.log(obj);

obj.eng4 = "fake";
