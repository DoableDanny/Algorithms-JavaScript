// Given a string of characters, return the character that appears the most often.

// Big O(n)
function max1(str) {
  let frequencyCounter = {};
  let lcStr = str.toLowerCase();

  for (let char of lcStr) {
    frequencyCounter[char] = frequencyCounter[char] + 1 || 1;
  }

  let maxCount = 0;
  let maxChar = null;
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > maxCount) {
      maxCount = frequencyCounter[key];
      maxChar = key;
    }
  }

  return maxChar;
}

console.log(max('Danny'));

// Frequency counters are an extremely useful way to solve problems. In the next video I'll show you how to use frequency counters to significantly increase the efficiency of an algorithm that compares two arrays.
