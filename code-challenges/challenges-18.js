'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let split = str.split(" ")
    let middle = split.length/2
     return  split[Math.floor(middle)].length
 
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
      }
    
      const charCount = {};
    
      // Count the occurrences of each character in str1
      for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
    
      // Subtract the occurrences of each character in str2
      for (let char of str2) {
        if (!charCount[char]) {
          return false; // If a character is not present in str1, return false
        }
        charCount[char]--;
      }
    
      // Check if all character counts are zero
      for (let count of Object.values(charCount)) {
        if (count !== 0) {
          return false;
        }
      }
    
      return true;
    }

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };