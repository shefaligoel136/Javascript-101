function printFirstName(name) {
  let arr = name.split(" ");
  return arr[0];
}

function printLastName(name) {
  let arr = name.split(" ");
  return arr[1];
}

const userName = "Shefali Goel";

printFirstName(userName);
printLastName(userName);

function greeter(name, cb) {
    let greeterMessage = cb(name);
    console.log("Hi",greeterMessage);
}

greeter(userName, printFirstName);
