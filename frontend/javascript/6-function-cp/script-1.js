// Mengembalikan teks yang berkebalikan
//
// contoh:
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
  // TODO: answer here
  var currentString = str;
  var newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + currentString[i];
  }

  return newString;
}

const string = prompt("Masukan teks: ");

const result = reverseString(string);
console.log(result);
