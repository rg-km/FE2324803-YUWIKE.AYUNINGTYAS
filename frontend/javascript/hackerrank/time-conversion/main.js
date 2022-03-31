// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  // TODO: answer here
  let ampm = s[s.length - 2] + s[s.length - 1];
  let hour = Number(s[0] + s[1]);

  if (ampm === "AM") {
    if (hour > 12) {
      hour = 0;
    } else if (ampm === "PM") {
      if (hour !== 12) {
        hour = 12 + hour;
      }
    }
  }
  let result = `${hour}`;
  for (let i = 2; i < s.length - 2; i++) {
    result += s[i];
  }
  return result;
}

function main() {
  //var s = readLine();
  var s = "07:05:45PM"; // override input
  var result = timeConversion(s);
  console.log(result);
}

main(); // execute program

module.exports = timeConversion;
