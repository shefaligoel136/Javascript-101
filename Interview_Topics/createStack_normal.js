function createStack() {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    },
    show() {
      return this.items;
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
console.log(stack.items);
