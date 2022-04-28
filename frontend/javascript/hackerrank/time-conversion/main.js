// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

<<<<<<< HEAD
=======

>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  // TODO: answer here
<<<<<<< HEAD
  var time = s.split(":");
  var hour = parseInt(time[0]);
  var minute = time[1];
  var second = time[2].split("");
  var ampm = second[second.length - 2] + second[second.length - 1];
  if (ampm === "PM") {
    if (hour !== 12) {
      hour += 12;
    }
  } else {
    if (hour === 12) {
      hour = "00";
    }
  }
  second.splice(second.length - 2, 2);
  return hour + ":" + minute + ":" + second.join("");

  // let ampm = s[s.length - 2] + s[s.length - 1];
  // let hour = Number(s[0] + s[1]);

  // if (ampm === "AM") {
  //   if (hour > 12) {
  //     hour = 0;
  //   } else if (ampm === "PM") {
  //     if (hour !== 12) {
  //       hour = 12 + hour;
  //     }
  //   }
  // }
  // let result = `${hour}`;
  // for (let i = 2; i < s.length - 2; i++) {
  //   result += s[i];
  // }
  // return result;
=======
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
}

function main() {
  //var s = readLine();
<<<<<<< HEAD
  var s = "07:05:45PM"; // override input
  var result = timeConversion(s);
  console.log(result);
=======
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
}

main(); // execute program

<<<<<<< HEAD
module.exports = timeConversion;
=======
module.exports = timeConversion
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
