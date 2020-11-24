// Given an array of numbers, calculate the mean, median, and mode.

class Stats {
  constructor(arr) {
    this.arr = arr;
  }

  // Add all values in array then divide by length of array
  mean() {
    return this.arr.reduce((sum, val) => sum + val, 0) / this.arr.length;
  }
}

const data = new Stats([1, 2, 3, 4]);
console.log(data.mean());
