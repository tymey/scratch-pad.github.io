// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */

/**
 * I: The function receives two integers.
 * O: The function returns an array containing all integers between the two parameters,
 *    inclusively. If the first argument is greater than the second, the function returns
 *    the range in reverse order.
 * C: Use the push() method of Array.
 * E: N/A
 */

function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    // Initialize result with an empty array
    var result = [];
    // Check if start < end
    if (start < end) {
        // If true, declare while loop; Stop: start <= end
        while (start <= end) {
            // Push start into result
            result.push(start);
            // Increment start
            start++;
        }
    // Check if else start > end
    } else if (start > end) {
        // If true, declare while loop; Stop: start >= end
        while (start >= end) {
            // Push start into result
            result.push(start);
            // Decrement start
            start--;
        }
    }
    // Return result
    return result;
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}