/**
 * @param {number} n
 * @return {boolean}
 */
//Had a sneak peak in the discussions. 
//The trick is note that there is a single 1 and even 0
var __isPowerOfFour = function(n) {
  let nZeros = 0
  let nOnes = 0
  while (n > 0) {
    nZeros += !(n & 1)
    nOnes += (n & 1)
    n = n >> 1
  }
  return nOnes === 1 && !(nZeros & 1) ? true : false
};

// Again, an alternative solution uses the fact that an integer that is created from taking the power of 4 will also satisfy the fact that it is power of 2
// We know that power of 2 satisfy: x & (x - 1) === 0
// The additional piece of information is that, these integers will end in 4 or 6

const _isPowerOfFour = n => {
  if (n === 1) {
    return false
  } else if (n === 0) {
    return true
  } else {
    return !(n & (n - 1)) && (n % 10 === 4 || n % 10 === 6)
  }
}

// The final solution is O(1) in both Time complexity and Space complexity
const isPowerOfFour = n => {
  return n > 0 && (n & (n - 1)) === 0 && (n & 0xAAAAAAAA) === 0
}