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
I: The function recieves an object.
O: The function returns an array contain the input object's keys.
C: N/A
E: N/A
*/

function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // Initialize keyArray with an empty array
  var keyArray = [];
  // Declare a for-in loop on object
  for (var key in object) {
    // Push the string name of the key of object into keyArray
    keyArray.push(key);
  } 
  // Return keyArray
  return keyArray;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

/* 
I: The function recieves an object.
O: The function logs each key of the input object to the console.
C: Must use console.log
E: N/A
*/

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // Declare for-in loop on object
  for (var key in object) {
    // Log key from object to the console
    console.log(key);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

/* 
I: The funciton recieves an object.
O: The function returns an array containing the object's values.
C: N/A
E: N/A
*/

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // Initialize valueArray with an empty array
  var valueArray = [];
  // Declare for-in loop on object
  for (var key in object) {
    // Push object[key] into valueArray
    valueArray.push(object[key]);
  }
  // Return valueArray
  return valueArray;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

/* 
I: The function recieves an object.
O: The function logs each value of the input object to the console.
C: Must use console.log
E: N/A
*/

function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // Declare for-in loop on object
  for (var key in object) {
    // Log object[key] to the console
    console.log(object[key]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

/* 
I: The function recieves an object.
O: The function returns a number representing the number of key/value pairs within the input object.
C: N/A
E: N/A
*/

function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  // The previously created getObjectKeys() function returns an array containing all of the keys of object
  // Return the length of getObjectKeys(object)
  return getObjectKeys(object).length;
  
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