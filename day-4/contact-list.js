// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list. (use splice method)
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

/**
 * I: The function receives a number representing an id and two strings representing
 *    the first and last name.
 * O: The function returns an object representing a contact.
 * C: N/A
 * E: N/A
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // Return an object with key/value pairs for id, nameFirst, & nameLast
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 

/**
 * I: The function does not receive any input.
 * O: The function returns an object and it will be loaded with several methods including:
 *    - length(): returns the number of contacts within the list.
 *    - addContact(contact): takes a contact object to be added to the 
 *      contact-list.
 *    - findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *      returns the contact object if found in the contacts-list, or, 
 *      undefined if the fullName does not match any contacts in the list.
 *    - removeContact(contact): takes a contact object to be removed from 
 *      the contact-list. (Hint: use splice method)
 *    - add a printAllContactNames() Function to your makeContactList() factory. The 
 *      printAllContactNames() Function should return a String formated with all the 
 *      full-names of the separated with a line-break.
 * C: N/A
 * E: N/A
 */

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // Create length key with a function value that receives no input
        length: function() {
            // Return the length of the contacts Array
            return contacts.length;
        },
        // Create addContact key with a function value that receives an object called contact
        addContact: function(contact) {
            // Push contact Object into the contacts Array
            contacts.push(contact);
        },
        /* Create findContact key with a function value that receives a string representing 
           a contacts Full Name */
        findContact: function(fullName) {
            // Iterate through contacts Array
            for (var i = 0; i < contacts.length; i++) {
                /* Check if fullName is strictly equal to 
                   contacts[i].firstName + ' ' + contacts[i].lastName */
                if (fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast) {
                    // Return contacts[i]
                    return contacts[i];
                }
            }
        },
        /* Create removeContact key with a function value that receives an object representing
           a contact */
        removeContact: function(contact) {
            // Iterate through contacts Array
            for (var i = 0; i < contacts.length; i++) {
                // Check if contacts[i].id is strictly equal to contact.id
                if (contacts[i].id === contact.id) {
                    // If true, delete contacts[i]
                    contacts.splice(i, 1);
                }
            }
        },
        // Create printAllContactNames key with function value that receives no input
        printAllContactNames: function() {
            // Initialize result variable with contacts[0].nameFirst + ' ' + contacts[0].nameLast
            var result = contacts[0].nameFirst + ' ' + contacts[0].nameLast;
            // Declare for loop; Start: 1; Stop: contacts.length; Increment by 1
            for (var i = 1; i < contacts.length; i++) {
                // Add and reassign result with '\n' + contacts[i].nameFirst + ' ' + contacts[i].nameLast
                result += '\n' + contacts[i].nameFirst + ' ' + contacts[i].nameLast;
            }
            // Return the string result
            return result;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}