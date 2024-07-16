// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: The function receives a string.
O: The function returns the length of the input string.
C: N/A
E: N/A
*/

function length(string) {
    // YOUR CODE BELOW HERE //
    
    // Return the .length of the input string
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

/*
I: The function recieves a string.
O: The function returns a new string, which is the input string forced to lowercase.
C: N/A
E: N/A
 */

function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   
    // The .toLowerCase() property converts a string to lowercase
    // Return the .toLowerCase() of the input string
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/*
I: The function recieves a string.
O: THe function returns a new string, which is the input string forced to uppercase
C: N/A
E: N/A
*/

function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    // The .toUpperCase() property converts the string to uppercase
    // Return the .toUpperCase() of the input string
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/*
I: The function recieves a string.
O: The function returns a new string, which is the input string forced to dash-case.
C: N/A
E: N/A
*/

function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    // Force the input string to lower case and assign it to the variable newString
    var newString = string.toLowerCase();
    /* Split input string into an array by seperating the string 
    based off of spaces (' ') and assign it to the variable array */
    var array = newString.split(' ');
    // Join array with a dash between each element to create a string and return it
    return array.join('-');
    /* The code above can be combined into one line of code: 
    return string.toLowerCase().split(' ').join('-');
    Keeping the lines seperate for readability. */

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: The function receives two strings, the first string will be the one that's checked 
   and the second string will be a single character.
O: The function returns a boolean stating whether the first input string begins with the character.
C: N/A
E: N/A
*/

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    // Declare array variable
    var array;
    // Split string and assign it to array
    array = string.split('');
    /* Return the comparison between array[0] being strictly equal to 
       char.toUpperCase() OR char.toLowerCase() */
    return array[0] === char.toUpperCase() || array[0] === char.toLowerCase();
    // If either comparison is true, it will return the boolean value true
    // If both comparisons are false, it will return the boolean value false

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: The function receives two strings, the first string will be the one that's checked 
   and the second string will be a single character.
O: The function returns a boolean stating whether the first input string ends with the character.
C: N/A
E: N/A
*/

function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

    // Declare array variable
    var array;
    // Split string and assign it to array
    array = string.split('');
    /* Return the comparison between array[array.length - 1] (the last element of array) 
       being strictly equal to char.toUpperCase() OR char.toLowerCase() */
    return array[array.length - 1] === char.toUpperCase() || array[array.length - 1] === char.toLowerCase();
    // If either comparison is true, it will return the boolean value true
    // If both comparisons are false, it will return the boolean value false

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/*
I: The function recieves two strings.
O: The function returns the concatenation of the two strings.
C: N/A
E: N/A
*/

function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // Return the concatenation of stringOne and stringTwo with + operator
    return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/*
I: The function recieves any number of strings.
O: The function returns one strings, the joining of all input strings.
C: N/A
E: N/A
*/

function join(stringOne, stringTwo, ...moreStrings) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // Return the joining of all of the elements in arg using no space
    return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

/*
I: The function recieves two strings.
O: The function returns the longest of the two strings.
C: N/A
E: N/A
*/

function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // Check if the .length of stringOne is greater than stringTwo
    if (stringOne.length > stringTwo.length) {
        // If true, return stringOne
        return stringOne;
    // Check else if the .length of stringOne is less than stringTwo
    } else if (stringOne.length < stringTwo.length) {
        // If true, return stringTwo
        return stringTwo;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
I: The function recieves two strings.
O: The function returns 1 if the first input string is higher in alphabetical order 
   than the second input string; returns -1 if the second is higher than the first;
   returns 0 if they're equal.
C: N/A
E: N/A
*/

function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
I: 
O: 
C: 
E: 
*/

function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}