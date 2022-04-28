// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Write your code here
  // TODO: answer here
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        temp += arr[j];
      }
    }
    if (min === 0 && max === 0) {
      min = temp;
      max = temp;
    } else {
      if (temp < min) {
        min = temp;
      }
      if (temp > max) {
        max = temp;
      }
    }
  }
  return min + " " + max;
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result);
}

main(); // execute program

module.exports = miniMaxSum;
