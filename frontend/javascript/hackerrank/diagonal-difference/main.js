// Diagonal Difference
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
<<<<<<< HEAD
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
=======
* Complete the 'diagonalDifference' function below.
*
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY arr as parameter.
*/
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492

// Full Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  // Write your code here
  // TODO: answer here
<<<<<<< HEAD
  // index primary: [0, 0], [1, 1], [2, 2]
  // index secondary: [0, 2], [1, 1], [2, 0]

  let primaryIndex = 0;
  let secondaryIndex = arr.length - 1;
  let primary = 0;
  let secondary = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === primaryIndex && j === primaryIndex) {
        primary += arr[i][j];
        primaryIndex++;
      }

      if (j === secondaryIndex) {
        secondary += arr[i][j];
        secondaryIndex--;
      }
    }
  }
  return Math.abs(primary - secondary);
=======
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
}

function main() {
  //var n = parseInt(readLine());
  var a = [
    [11, 2, 4],
    [4, 5, 6],
<<<<<<< HEAD
    [10, 8, -12],
=======
    [10, 8, -12]
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
  ]; // override input
  let result = diagonalDifference(a);
  console.log(result);
}

main(); // execute program

<<<<<<< HEAD
module.exports = diagonalDifference;
=======
module.exports = diagonalDifference
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
