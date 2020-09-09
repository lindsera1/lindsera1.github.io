'use-strict';

/**
 * This function will determine the largest of three arguments
 * and return the largest
 * 
 * @param {number} a random number
 * @param {number} b random number
 * @param {number} c random number
 * @returns {number} The highest
 */

function maxofThree(a,b,c){

    let largest = a;

    if(b>largest){
        largest = b;
    }
    if(c>largest){
        largest = c;
    }
    return largest;
  }

  /**
   * @param {number} accumulator A container for the total 
   * @param {n} n represents each number in the array
   * @returns {number} the sum of all numbers in an array
   */

  function sum(arr){
      let sum = 0;
      for(let num of arr){
          sum+=num;
      }
      return sum
  }

  /**
   * 
   * @param {Object} arr An array of strings
   * @returns {string} The longest string in the array
   */

  function findLongestWord(arr){
    let length = 0;

    for(let word of arr){
        if (word.length > length){
            length = word.length;
        }
    }
    return length;
}

/**
 * 
 * @param {string} char Any character of length 1
 * @returns {boolean} True or false if the character is a vowel or not 
 *
 */

function isVowel(char){
    if(char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u'){
        return true;
    } else if(char != ""){
        return false;
    } 
    return false;
}

