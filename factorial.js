// Iterative approach
function factorial(num) {
  let total = 1;
  for (let i = 2; i <= num; i++) {
    total *= i;
  }

  return total;
}

console.log(factorial(2));

// Recursive approach
function factorial2(num) {
  // Base case (when to stop)
  if (num === 1) return 1;

  // Recursive part (function calls itself)
  return num * factorial2(num - 1);
}

// Callstack
1;
2 * factorial2(1);
3 * factorial2(2);
factorial2(3);

console.log(factorial2(3)); // 6

// Recursion (1 line) - Recursion is sometimes cleaner, clearer and more precise. Been shown that any iterative function can be reproduced as a recursive one and vice versa.
function factorial3(num) {
  return num < 2 ? 1 : num * factorial3(num - 1);
}

console.log(factorial3(3));
