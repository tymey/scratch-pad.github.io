// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*
I: The function has no parameters.
O: The function logs the numbers 1 to 100 to the console. Instead of multiples of 3, 
   it will log 'Fizz'. Instead of multiples of 5, it will log 'Buzz'. If the number 
   is a multiple of 3 and 5, it will log 'FizzBuzz.
C: N/A
E: N/A
*/

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    // Declare for loop using i; Start: 1; Stop(inclusive): 100; Increment by 1 each loop
    for (var i = 1; i <= 100; i++) {
        // Check if i is a multiple of 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            // If true, log 'FizzBuzz' to the console
            console.log('FizzBuzz');
        // Check else if i is a multiple of 3
        } else if (i % 3 === 0) {
            // If true, log 'Fizz' to the console
            console.log('Fizz');
        // Check else if i is a multiple of 5
        } else if (i % 5 === 0) {
            // If true, log 'Buzz to the console
            console.log('Buzz');
        // Else, log i to the console
        } else {
            console.log(i);
        }
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}