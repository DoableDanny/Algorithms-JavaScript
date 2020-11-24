// Hi guys, in this video I'm gonna show you 3 different ways to reverse a string and discuss the performance and pros and cons of each method. It's important to be able to discuss your algorithms in job interviews so you can show off your impeccable algorithmic knowledge.
// So, your're sat face-to-face with impending doom -  your interviewer, and he asks you to: Reverse a string without using the reverse array method. Disuss performance in terms of Big O.

// Naive way aka brute force
function reverseStr(str) {
  let arr = [];
  let charsArr = str.split('');

  for (let i = charsArr.length - 1; i >= 0; i--) {
    arr.push(charsArr[i]);
  }

  return arr.join('');
}

// Improve by using the "swapping" approach. Still has a big O of 1, but it's faster because we only go through the characters array half the number of times. Cost => we need an extra variable in storage. No problem here as only one, but it's something to consider in larger algorithms. Almost always a tradeoff between memory and speed.
function reverseStr2(str) {
  let returnVal = new Array(str.length);
  let charsArr = str.split('');

  let left = 0;
  let right = charsArr.length - 1;
  while (left <= right) {
    returnVal[left] = charsArr[right];
    returnVal[right] = charsArr[left];
    left++;
    right--;
  }

  return returnVal.join('');
}

// Easy peasy way
function reverseStr3(str) {
  return str.split('').reverse().join('');
}

console.log(reverseStr2('Hi Dan the man!'));
['y', , , 'D'];
