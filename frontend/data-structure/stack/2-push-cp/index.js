// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi push.

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
};
