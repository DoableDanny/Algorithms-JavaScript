// Implement a function that returns the fibonacci number at a given index.
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// Iterative approach - Big O(n) time complexity
function fibonacci(num) {
  let a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

console.log(fibonacci(4));

// Recursion. Big O(2^n) - Cleaner but worse!
function fib2(num) {
  // fib = 1 for both index 0 and 1
  if (num <= 1) return 1;

  return fib2(num - 1) + fib2(num - 2);
}

console.log(fib2(3));

// fib2(1) + fib2(0) + 1
// fib2(2) + fib2(1)
// fib2(3)
