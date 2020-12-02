// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is zero. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Brute force big O(n^2) time and o(1) space
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

console.log(sumZero([1, 2, -2, 3]));

// More efficient but requires input array to be sorted. No efficient method if array not sorted. O(n) time and O(1) space
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
}

console.log(sumZero2([-3, -2, -1, 0, 1, 5]));
