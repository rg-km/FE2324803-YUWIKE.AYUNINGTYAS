// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi pop.

module.exports = class Stack {
  constructor() {
    // TODO: answer here
    this.stack = [];
    this.data = 10;
    this.top = -1;
  }

  push(elemen) {
    // TODO: answer here
    this.top += 1;
    this.data = elemen;
    return this.stack.push(elemen);
  }

  pop() {
    // TODO: answer here
    if (this.isEmpty()) {
      throw "stack underflow";
    } else {
      let poppedValue = this.stack.pop();
      this.top -= 1;
      return poppedValue;
    }
  }
};
