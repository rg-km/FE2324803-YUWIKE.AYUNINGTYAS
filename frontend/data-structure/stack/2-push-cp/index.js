// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi push.

module.exports = class Stack {
<<<<<<< HEAD
  constructor() {
    // TODO: answer here
    this.data = [];
    this.top = -1;
    this.size = 10;
  }

  push(elemen) {
    // TODO: answer here
    if (this.top >= 10) {
      return "Stack Overflow";
    } else {
      this.top++;
      this.data[this.top] = elemen;
    }
  }
};
=======
    constructor() {
        // TODO: answer here
    }

    push(elemen) {
        // TODO: answer here
    }
}
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
