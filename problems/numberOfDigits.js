/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    let count = 0 
    let iter = n.toString()
    
    for (let num of iter){
      count += 1
    }
return count
}

module.exports = numberOfDigits
