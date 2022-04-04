// Dari kode di bawah ini

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// buat kode untuk manipulasi data dalam objek berdasarkan instruksi berikut

// 1. Tulis perintah untuk menambahkan bahasa "Go" ke akhir array languages.
let languages = programming.languages;
languages.push("Go");
// 2. Ubah difficulty menjadi 7.
let difficulty = programming.difficulty;
difficulty = 7;
// 3. Menggunakan kata kunci delete, tulis perintah untuk menghapus key jokes dari objek programming.
let jokes = programming.jokes;
delete programming.jokes;
// 4. Tulis perintah untuk menambahkan key baru yang disebut isFun dan nilai true ke objek programming.
let isFun = programming.isFun;
isFun = true;
// 5. Menggunakan loop, iterasi array languages dan console.log semua bahasa.
for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}
// 6. Menggunakan loop, console.log semua key dalam objek pemrograman.
for (let key in programming) {
  console.log(key);
}
// 7. Menggunakan loop, console.log semua value dalam objek pemrograman.
for (let value in programming) {
  console.log(programming[value]);
}

// TODO: answer here
