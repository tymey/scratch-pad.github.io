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
 * I: The function receives a string that is a single character.
 * O: The function returns a function that tests whether a given string starts
 *    with the single character.
 * C: N/A
 * E: N/A
 */

function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // Return a function that recieves a string
    return function(string) {
        // Create an array of the letters of string all lowercase
        var array = string.toLowerCase().split('');
        // Return the comparison of array[0] strictly equal to startsWith.toLowerCase()
        return array[0] === startsWith.toLowerCase();

    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */

/**
 * I: The function receives a string that is a single character.
 * O: The function returns a function that tests whether a given string ends
 *    with the single character.
 * C: N/A
 * E: N/A
 */

function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    // Return a function that recieves a string
    return function(string) {
        // Create an array of the letters of string all lowercase
        var array = string.toLowerCase().split('');
        /*  Return the comparison of array[array.length - 1] strictly equal 
            to endsWith.toLowerCase() */
        return array[array.length - 1] === endsWith.toLowerCase();    
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */

/**
 * I: The function recieves an array of strings and a function designed to 
 *    modify a String.
 * O: The function returns the input array of strings modified with the input
 *    function.
 * C: N/A
 * E: N/A
 */

function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // Initialize result with an empty array
    var result = [];
    // Iterate through the input array
    for (var i = 0; i < strings.length; i++) {
        // Perform modify function on strings[i] and push into result
        result.push(modify(strings[i]));
    }
    // Return result
    return result;
    
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

/**
 * I: The function receives an array of strings and a function designed to test a 
 *    string in some way and return a Boolean on whether it passed.
 * O: The function returns true if ALL strings pass the test and false otherwise.
 * C: N/A
 * E: N/A
 */

function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    // Iterate through strings array
    for (var i = 0; i < strings.length; i++) {
        // Check if strings[i] doesn't pass the test given by the test function
        if (test(strings[i]) === false) {
            // If true, return false.
            return false;
        }
    }
    // Return true
    return true;
    
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