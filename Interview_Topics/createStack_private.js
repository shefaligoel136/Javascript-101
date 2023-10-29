// with private items.

function createStack() {
  let items = []; // made this private
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
    show() {
      return items;
    },
  };
}

const stack = createStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
console.log(stack.show());
stack.pop();
console.log(stack.show());
