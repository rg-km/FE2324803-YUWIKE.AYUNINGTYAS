class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  isEmpty() {
    return this.top == -1;
  }

  peek() {
    //peek melihat tumpkan paling atas
    if (this.isEmpty()) {
      throw "stack is empty";
    } else {
      return this.data[this.top];
    }
  }
}
