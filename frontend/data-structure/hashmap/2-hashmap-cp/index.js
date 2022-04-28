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
  const str1Hash = {};
  const str2Hash = {};
  if (str1.length !== str2.length) {
    return "Bukan Anagram";
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1Hash[str1[i]]) {
      str1Hash[str1[i]] += 1;
    } else {
      str1Hash[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2Hash[str2[i]]) {
      str2Hash[str2[i]] += 1;
    } else {
      str2Hash[str2[i]] = 1;
    }
  }
  for (let key in str1Hash) {
    if (str1Hash[key] !== str2Hash[key]) {
      return "Bukan Anagram";
    }
  }
  return "Anagram";
}

console.log(anagramChecker("keen", "knee"));
console.log(anagramChecker("kee", "knn"));
console.log(anagramChecker("fried", "fired"));

module.exports = {
  anagramChecker,
};
