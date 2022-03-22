// Pengecekan angka positif, negatif, atau 0 dengan nested if

// Masukan suatu angka
const number = parseInt(prompt("Masukan bilangan: "));

if (number > 0) {
  console.log("Bilangan Positif");
} else if (number == 0) {
  console.log("Bilangan 0");
} else {
  console.log("Bilangan Negatif");
}
