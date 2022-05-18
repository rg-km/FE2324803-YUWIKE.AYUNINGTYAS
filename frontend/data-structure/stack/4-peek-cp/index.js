// Dari inisiasi stack dengan maksimal elemen sebanyak 10, implementasikan operasi peek.

module.exports = class Stack {
  constructor() {
    // TODO: answer here
    this.data = [];
    this.top = -1;
  }

  push(elemen) {
    // TODO: answer here
    this.top += 1;
    this.data.push(elemen);
  }

  pop() {
    // TODO: answer here
    if (this.data.length == 0) {
      throw "stack underflow";
    } else {
      this.top -= 1;
      let poopedValue = this.data.pop();
      return poopedValue;
    }
  }

  peek() {
    // TODO: answer here
    if (this.data.length == 0) {
      throw "stack is empty";
    } else {
      return this.data[this.top];
    }
  }
};
