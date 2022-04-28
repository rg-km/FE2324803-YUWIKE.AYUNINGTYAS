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
<<<<<<< HEAD
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
=======
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
<<<<<<< HEAD
  console.log(result);
=======
  console.log(result)
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
}

main(); // execute program

<<<<<<< HEAD
module.exports = miniMaxSum;
=======
module.exports = miniMaxSum
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
