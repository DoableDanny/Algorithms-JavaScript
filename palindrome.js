// Write a function that takes a string and checks if it is a palindrome i.e. it reads the same when reversed.

// Easy peasy way big O(n)
function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');

  return reversedStr.toLowerCase() === str.toLowerCase();
}

// Still big O(n) - but bit more efficient. Best case scenario, we only have to check left === right once. Worst case - only have to loop through half the array.
function isPalindrome2(str) {
  let lcStr = str.toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (lcStr[left] !== lcStr[right]) return false;

    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome('Noon'));

'dan' === 'nad'; // false
'Mom' === 'moM'; // true
