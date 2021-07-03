/**
* @param {number} n - a positive integer
* @return {number} - a positive integer
*/
// This is the solution... I misinterpreted the question
// This is NOT the same FLIPPING the bits, its reversing bits
const reverseBits = n => { 
  let result = 0
  let bits = 32
  while (bits) {
    result += (n & 1) << (bits-1) // n & 1 gets the lsb, << bits reverses it to the correct position
    n = n >> 1 // move 1 bit to the right
    bits--
  }
  return result>>>0
}
// Time complexity: O(1), the number of iterations is fixed regarless of input
// Space complexity: O(1)

// You can use divide and conquer to simply this solution ever further (see solution)