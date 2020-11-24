// The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:

// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0) console.log('Fizz Buzz');
    else if (i % 2 === 0) console.log('Fizz');
    else if (i % 3 === 0) console.log('Buzz');
    else console.log(i);
  }
}

fizzBuzz(10);
