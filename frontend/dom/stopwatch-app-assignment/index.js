/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch

// TODO: answer here
let stopwatch = document.getElementById("stopwatch");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

function start() {
  // TODO: answer here
  let startTime = new Date();
  let startTimeString = startTime.toLocaleTimeString();
  stopwatch.innerHTML = startTimeString;
  let interval = setInterval(function () {
    let currentTime = new Date();
    let currentTimeString = currentTime.toLocaleTimeString();
    stopwatch.innerHTML = currentTimeString;
  }, 1000);
}

function stop() {
  // TODO: answer here
  let stopTime = new Date();
  let stopTimeString = stopTime.toLocaleTimeString();
  stopwatch.innerHTML = stopTimeString;
  clearInterval(interval);
}

function reset() {
  // TODO: answer here
  let resetTime = new Date();
  let resetTimeString = resetTime.toLocaleTimeString();
  stopwatch.innerHTML = resetTimeString;
  clearInterval(interval);
}

function runTime() {
  // TODO: answer here
  let startTime = new Date();
  let startTimeString = startTime.toLocaleTimeString();
  stopwatch.innerHTML = startTimeString;
  let interval = setInterval(function () {
    let currentTime = new Date();
    let currentTimeString = currentTime.toLocaleTimeString();
    stopwatch.innerHTML = currentTimeString;
  }, 1000);
}
