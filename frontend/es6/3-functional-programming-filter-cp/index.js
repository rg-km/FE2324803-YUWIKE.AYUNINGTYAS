/**
 * Mencari hewan diantara semak-semak
 * Buatlah fungsi untuk mencari nama binatang yang tersembunyi di dalam random string
 * Kata yang di cari akan selalu dituliskan dengan huruf kecil
 * Sedangkan semak-semak akan dituliskan dengan huruf besar.
 *
 * Contoh:
 * Input: UkUNFYGaFYFYmtNUHbJKHJJiOKDJKDnKFKFLgLLF
 * Output: kambing
 *
 * Hint:
 * - Javascript memiliki fungsi untuk mengubah huruf besar menjadi huruf kecil dan huruf besar menjadi huruf kecil
 * - string.toLowerCase(); string.toUpperCase();
 *
 */

const findAnimal = (bush) => {
  // TODO: answer here
  let animal = "";

  for (let i = 0; i < bush.length; i++) {
    if (bush[i] === bush[i].toUpperCase()) {
      animal += bush[i].toLowerCase();
    } else {
      animal += bush[i].toUpperCase();
    }
  }
  return animal;
};

console.log(findAnimal("UkUNFYGaFYFYmtNUHbJKHJJiOKDJKDnKFKFLgLLF")); // kambing

module.exports = findAnimal;
