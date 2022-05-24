// Mengecek jika dua string adalah anagram
// Anagram adalah kata yang dibentuk melalui penataan ulang huruf-huruf dari beberapa kata lain.
//
// Contoh 1
// Input: a = "keen", b = "knee"
// Output: "Anagram"
// Explanation: Jika ditata, "knee" dan "keen" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 2
// Input: a = "fried", b = "fired"
// Output: "Anagram"
// Explanation: Jika ditata, "fried" dan "fired" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 3
// Input: a = "apple", b = "paddle"
// Output: "Bukan Anagram"
// Explanation: Jika ditata, "apple" dan "paddle" memiliki huruf-huruf yang berbeda

function anagramChecker(str1, str2) {
  // TODO: replace this
  let str1Arr = str1.split("");
  let str2Arr = str2.split("");
  let str1Obj = {};
  let str2Obj = {};
  let result = "";
  for (let i = 0; i < str1Arr.length; i++) {
    if (str1Obj[str1Arr[i]]) {
      str1Obj[str1Arr[i]]++;
    } else {
      str1Obj[str1Arr[i]] = 1;
    }
  }
  for (let i = 0; i < str2Arr.length; i++) {
    if (str2Obj[str2Arr[i]]) {
      str2Obj[str2Arr[i]]++;
    } else {
      str2Obj[str2Arr[i]] = 1;
    }
  }
  for (let key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) {
      result = "Bukan Anagram";
      break;
    } else {
      result = "Anagram";
    }
  }
  return result;
}

console.log(anagramChecker("keen", "knee"));
console.log(anagramChecker("kee", "knn"));
console.log(anagramChecker("fried", "fired"));

module.exports = {
  anagramChecker,
};
