// Big O of O(1)
function timesTwo(num) {
  return 2 * num;
}

let result1 = timesTwo(5); // 10
let result2 = timesTwo(2000); // 4000

// Big O of O(n)
function reverseArr(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

let reversedArr1 = reverseArr([1, 2, 3]); // [3, 2, 1]
let reversedArr2 = reverseArr([1, 2, 3, 4, 5, 6]); // [6, 5, 4, 3, 2, 1]

// Big O of O(n^2)
function multiplyAll(arr1, arr2) {
  let total = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      total += arr1[i] * arr2[j];
    }
  }
  return total;
}

let result1 = multiplyAll([1, 2], [5, 6]); // 33
let result2 = multiplyAll([1, 2, 3, 4], [5, 3, 1, 8]); // 170

console.log(result1);
console.log(result2);
