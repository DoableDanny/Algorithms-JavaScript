// Given an array of numbers, calculate the mean, median, and mode.
// Good opportunity to show off your skills and create a Stats class.

class Stats {
  constructor(arr) {
    this.arr = arr;
  }

  // Add all values in array then divide by length of array
  mean() {
    return this.arr.reduce((sum, val) => sum + val, 0) / this.arr.length;
  }

  median() {
    const arrSorted = this.arr.sort();
    console.log(arrSorted);
    return arrSorted.length % 2 === 0
      ? (arrSorted[arrSorted.length / 2 - 1] +
          arrSorted[arrSorted.length / 2]) /
          2
      : arrSorted[Math.floor(arrSorted.length / 2)];
  }

  mode() {
    let frequencyCounter = {};

    // Could also use forEach higher order array method
    for (let num of this.arr) {
      frequencyCounter[num] = frequencyCounter[num] + 1 || 1;
    }

    let modes = [];
    let max = 0;
    for (let key in frequencyCounter) {
      const num = parseFloat(key);
      const count = frequencyCounter[key];
      if (count > max) {
        modes = [num];
        max = count;
      } else if (count === max) {
        modes.push(num);
      }
    }

    if (modes.length === Object.keys(frequencyCounter).length) modes = [];

    return modes;
  }
}

const data1 = new Stats([1, 2, 3, 2]); // [2]
const data2 = new Stats([2, 4, 3, 3, 1, 1]); // [1, 3]
const data3 = new Stats([1, 4, 3]); // []

console.log(data1.mode());
console.log(data2.mode());
