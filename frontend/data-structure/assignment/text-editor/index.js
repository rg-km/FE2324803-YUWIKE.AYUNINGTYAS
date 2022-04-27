module.exports = class TextEditor {
  constructor() {
    // TODO: answer here
    this.undoStack = "";
    this.redoStack = "";
    this.undoArrStack = [];
    this.redoArrStack = [];
  }

  write(c) {
    // TODO: answer here
    this.undoStack += c; //menyiman data yang diinputkan
    this.undoArrStack.push(c); //menyimpan data yang diinputkan di c
  }

  read() {
    // TODO: answer here
    this.undoStack = "";
    for (let i = 0; i < this.undoArrStack.length; i++) {
      this.undoStack += this.undoArrStack[i];
    }
    return this.undoStack;
  }

  undo() {
    // TODO: answer here
    if (this.undoStack.length != 0) {
      var poopedValue = this.undoArrStack.pop();
      this.redoArrStack.push(poopedValue);
      this.undoStack = "";
      this.redoStack += poopedValue;
      for (let i = 0; i < this.undoArrStack.length; i++) {
        this.undoStack += this.undoArrStack[i];
      }
    }
  }

  redo() {
    // TODO: answer here
    var poopedValue = this.redoArrStack.pop();
    this.undoArrStack.push(poopedValue);
    this.redoStack = "";
    for (let i = 0; i < this.redoArrStack.length; i++) {
      this.redoStack += this.redoArrStack[i];
    }
  }
};

// console.log(output);
// consolo.log(te.undoStack.length);
// consolo.log(te.redoStack.length);
