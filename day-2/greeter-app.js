// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

/* 
I: The function recieves a number representing the time of the day.
O: The function logs a string message depending on the time of the day.
C: The texts are CASE sensitive.
E: N/A
*/


function greeter(hour) {
    // YOUR CODE BELOW HERE //
    
    // Check if hour is between (inclusive) 0 and 11
    if (hour >= 0 && hour <= 11) {
        // If true, log 'Good Morning'
        console.log('Good Morning!');
    // Check else if hour is between (inclusive) 12 and 16
    } else if (hour >= 12 && hour <= 16) {
        // If true, log 'Good Afternoon!'
        console.log('Good Afternoon!');
    // Check else if hour is between (inclusive) 17 and 21
    } else if (hour >= 17 && hour <= 21) {
        // If true, log 'Good Evening!'
        console.log('Good Evening!');
    // Check else if hour is between (inclusive) 22 and (exclusive) 24
    } else if (hour >= 22 && hour < 24) {
        // If true, log 'Good Night!'
        console.log('Good Night!');
    } 
    
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}