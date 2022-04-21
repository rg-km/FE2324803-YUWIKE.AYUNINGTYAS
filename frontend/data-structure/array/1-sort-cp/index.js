// Sort array terlebih dahulu, kemudian rotasi ke kiri sesuai dengan nilai yang telah ditentukan.
//
// Contoh Sort array:
// Input: [4,5,2,1,3]
// Output: [1,2,3,4,5]

//Contoh RotateLeft:
//Input: 4, [1,2,3,4,5]
//Output: [5,1,2,3,4]

// Explanation RotateLeft:
// untuk melakukan rotasi kiri dengan nilai 4, array mengalami urutan perubahan berikut:
// [1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr; // TODO: replace this
}

function rotateLeft(d, arr) {
  let temp = [];
  for (let i = 0; i < d; i++) {
    temp.push(arr.pop());
  }
  for (let i = 0; i < temp.length; i++) {
    arr.unshift(temp[i]);
  }
  return arr; // TODO: replace this
}

let nums = [4, 5, 2, 1, 3];
let sorted = sort(nums);
console.log(sorted);
rotated = rotateLeft(4, sorted);
console.log(rotated);

module.exports = { sort, rotateLeft };
