// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

/** 
 * I: The function receives a number or a string to act as a base to test against.
 * O: The function returns a function that tests whether a given value is greater than
 *    the base.
 * C: N/A
 * E: N/A
*/

function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    console.log(base);
    // Return a function that recieves a value
    return function(value) {
        // Return the comparison value > base
        return value > base;
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 */

/** 
 * I: The function receives a number or a string to act as a base to test against.
 * O: The function returns a function that tests whether a given value is less than
 *    the base.
 * C: N/A
 * E: N/A
*/

function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // Return a function that recieves a value
    return function(value) {
        // Return the comparison value < base
        return value < base;
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */

/**
 * I: 
 * O:
 * C: 
 * E: 
 */

function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

    // Return a function that recieves a string
    return function(string) {
        // Create an array of the letters of string all lowercase
        var array = string.split('');
        // Return the comparison of array[0] strictly equal to startsWith
        return array[0] === startsWith;
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// Example uses
var uppercase = modifyStrings(['tyler', 'ashley'], function(string){
    return string.toUpperCase();
}); // ['TYLER', 'ASHLEY']

var addedExclamation = modifyStrings(['alex', 'francis'], function(string){
    return string + "!";
}); // ['alex!', 'francis!']

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// Example uses
var beginsWithA = allStringsPass(['alex', 'aaron'], function(str){
    return str[0] === 'a';
}); // true (because all elements begin with 'a')

var fiveOrMoreLetters = allStringsPass(['alex', 'francis', 'aaron'], function(str){
    return str.length > 4;
}); // false (because 'alex' does not have five or more letters)

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}