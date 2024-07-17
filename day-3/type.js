// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */

/**
 * I: The functions recieves a value.
 * O: The function returns true if the value is an Array, false if otherwise.
 * C: N/A
 * E: N/A
 */

function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // Use the Array.isArray() method to return a Boolean on whether or not value is an Array
    // Return Array.isArray(value)
    return Array.isArray(value);
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */

/**
 * I: The function recieves a value.
 * O: The function returns true if the value is an Object intended as a
 *    collection, false if otherwise.
 * C: Make sure Array, Null, and Date return false.
 * E: N/A
 */

function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    // Check if value is an array using Array.isArray(value)
    if (Array.isArray(value)) {
        // If true, return false
        return false;
    // Check else if value is strictly equal to null
    } else if (value === null) {
        // If true, return false
        return false;
    // Check else if value is a date using value instanceof Date
    } else if (value instanceof Date) {
        // If true, return false
        return false;
    // Else, return typeof value === 'object'
    } else {
        return typeof value === 'object';
    }
        
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

/**
 * I: The function recieves a value.
 * O: The function returns true if the input value is either an Array or an Object intended
 *    as a collection, false if otherwise.
 * C: Null and Date values should return as false. Array may return true.
 * E: N/A
 */

function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // Check if value is a null datatype
    if (value === null) {
        // If true, return false
        return false;
    // Check else if value is a Date datatype
    } else if (value instanceof Date) {
        // If true, return false
        return false;
    // Else, return typeof value === 'object'
    } else {
        return typeof value === 'object';
    } 
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 

/**
 * I: The function recieves a value.
 * O: The function returns a string representing the datatype of the input value.
 * C: N/A
 * E: N/A
 */

function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    // Check if value is an Array datatype
    if (Array.isArray(value)) {
        // If true, return 'array'
        return 'array';
    // Check else if value is a Null datatype
    } else if (value === null) {
        // If true, return 'null'
        return 'null';
    // Check else if value is a Date
    } else if (value instanceof Date) {
        // If true, return 'date'
        return 'date';
    // Else, return typeof value
    } else {
        return typeof value;
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}