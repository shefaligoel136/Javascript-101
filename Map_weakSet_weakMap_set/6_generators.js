function* fn() {
  console.log("Before first Yield");
  console.log("Before first Yield");
  console.log("Before first Yield");
  yield 10;

  console.log("before second yield");

  yield 20;
  console.log("after second yield");
}

let generator = fn();
console.log("Before");
console.log("res of first yield", generator.next().value);

console.log("Between");

console.log("res of first yield", generator.next().value);

console.log("res of first yield", generator.next().value);
