// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

/*
I: The function recieves a string.
O: The function returns a new string representing the input string reversed.
C: N/A
E: N/A
*/

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    
    // Initialize reverseArray variable with an empty array
    var reverseArray = [];
    // Initialize inputArray variable with input.split('')
    var inputArray = input.split('');
    // Declare while loop with the condition that inputArray.length > 0
    while (inputArray.length > 0) {
      // Push inputArray.pop() into reverseArray()
      reverseArray.push(inputArray.pop());
    }
    // Return reverseArray.join('')
    return reverseArray.join('');

    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}