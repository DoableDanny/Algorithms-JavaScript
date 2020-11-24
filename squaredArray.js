// Write a function called "squared" which takes two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// Brute force aka Naive approach. Big O(n^2)
function squared(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let foundIndex = arr2.indexOf(arr1[i] ** 2);

    if (foundIndex === -1) return false;
    arr2.splice(foundIndex, 1);
  }
  return true;
}

// Refactor using frequency counters BigO(n)
function squared2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let num of arr1) {
    frequencyCounter1[num] = frequencyCounter1[num] + 1 || 1;
  }

  for (let num of arr2) {
    frequencyCounter2[num] = frequencyCounter2[num] + 1 || 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}

console.log(squared2([1, 2, 3], [9, 1, 4])); // true
console.log(squared2([1, 2, 3], [1, 4])); // fasle
console.log(squared2([2, 2, 3], [4, 9, 9])); //false

// Frequency counters also useful for comparing strings e.g. checking if strings are anagrams (same frequency of chars in each string)
