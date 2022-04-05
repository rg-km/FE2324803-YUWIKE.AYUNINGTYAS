/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let newGameBtn = tombol untuk melakukan restart game
// let randomNumber = generate random number dari 1 sampai 10
// let message = element untuk menampilkan pesan
// let displayScore = element untuk menampilkan score
// let input = element untuk memasukan data
// let checkBtn = tombol untuk melakuan pengecekan angka pada input
// let score = nilai yang akan ditampilakan

let quote = document.getElementById("random-quote");
let author = document.getElementsByClassName("author");
let citation = document.getElementsByClassName("citation");
let year = document.getElementsByClassName("year");
let button = document.getElementsByTagName("button");

// TODO: answer here
button[0].addEventListener("click", () => {
  const n = getQuote();
  displayQuote(n);
});

function getQuote() {
  const index = Math.floor(Math.random() * (quotes.length - 1));
  return index;
}

function displayQuote(n) {
  const currQuote = quotes[n];
  quote.innerText = currQuote.quote;
  author[0].innerText = currQuote.author;
  if (currQuote.hasOwnProperty("citation")) {
    citation[0].innerText = currQuote.citation;
  } else {
    citation[0].innerText = "";
  }
  if (currQuote.hasOwnProperty("year")) {
    year[0].innerText = currQuote.year;
  } else {
    year[0].innerText = "";
  }
  console.log(currQuote);
}

//dilarang menghapus code dibawah ini!
document.getElementById("hidden-number").innerHTML = randomNumber;
