// Grading Students
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  // Write your code here
  // TODO: answer here
<<<<<<< HEAD
  var result = [];
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      result.push(grades[i]);
    } else {
      var nextMultipleOfFive = Math.ceil(grades[i] / 5) * 5;
      if (nextMultipleOfFive - grades[i] < 3) {
        result.push(nextMultipleOfFive);
      } else {
        result.push(grades[i]);
      }
    }
  }
  return result;
  //   let result = [];
  //   for (let i = 0; i < grades.length; i++) {
  //     if (grades[i] < 38) {
  //       result.push(grades[i]);
  //     } else {
  //       if (grades[i] % 5 >= 3) {
  //         console.log(Math.ceil(grades[i] / 5) * 5);
  //       } else {
  //         result.push(grades[i]);
  //       }
  //     }
  //   }
  //   return result;
=======
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
}

function main() {
  //     var n = parseInt(readLine());
  //     var grades = [];
  //     for(var grades_i = 0; grades_i < n; grades_i++){
  //        grades[grades_i] = parseInt(readLine());
  //     }
  var grades = [73, 67, 38, 33]; // override input
  var result = gradingStudents(grades);
  console.log(result.join("\n"));
}

main(); // execute program

<<<<<<< HEAD
module.exports = gradingStudents;
=======
module.exports = gradingStudents
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
