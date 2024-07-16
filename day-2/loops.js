// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

/* 
I: The function recieves an array.
O: The function logs all of the elements in the input array to the console.
C: Must use console.log
E: N/A
*/

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // Declare for loop using i; Start: 0; Stop: array.length; Increment by 1
  for (var i = 0; i < array.length; i++) {
    // Log array[i] to the console
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

/* 
I: The function recieves an array.
O: The function logs the elements of the inpout array in reverse order to the console.
C: Must use console.log
E: N/A
*/

function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // Declare for loop using i; Start: array.length - 1; Stop(inclusive): 0; Decrement by 1 each loop
  for (var i = array.length - 1; i >= 0; i--) {
    // Log array[i] to the console
    console.log(array[i]);
  } 
    
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

/* 
I: 
O: 
C: 
E: 
*/

function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

/* 
I: 
O: 
C: 
E: 
*/

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

/* 
I: 
O: 
C: 
E: 
*/

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

/* 
I: 
O: 
C: 
E: 
*/

function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

/* 
I: 
O: 
C: 
E: 
*/

function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

/* 
I: 
O: 
C: 
E: 
*/

function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}