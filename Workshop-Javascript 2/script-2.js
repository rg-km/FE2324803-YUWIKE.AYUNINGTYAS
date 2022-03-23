// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh:
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = parseInt(prompt("Masukan jumlah baris: "));

let stars = " ";
for (let i = n; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  console.log(stars);
  stars = " ";
}
