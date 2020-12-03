// For a given number of steps, print out a “staircase” using hashes and spaces. Big 0(n^2) for both time and space.
function steps(num) {
  let stairs = "";

  for (let row = 0; row < num; row++) {
    let stair = "";

    for (let column = 0; column < num; column++) {
      stair += column <= row ? "#" : " ";
    }
    stairs += stair + "\n";
  }
  return stairs;
}

console.log(steps(2));
// #
// ##
console.log(steps(4));
// #
// ##
// ###
// ####

// Recursive method
function steps2(number, row = 0, step = "", steps = "") {
  // base case
  if (row === number) return steps;

  if (step.length === number)
    return steps2(number, row + 1, "", steps + step + "\n");

  return steps2(number, row, step + (step.length <= row ? "#" : " "), steps);
}

console.log(steps2(4));
// #
// ##
// ###
