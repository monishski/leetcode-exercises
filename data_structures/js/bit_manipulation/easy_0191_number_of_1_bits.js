/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = n => {
  let bits = 32
  let result = 0
  while (bits > 0) {
    result += n & 1 
    n = n >> 1
    bits--
  }
  return result
};
// Time complexity: O(32) ~ O(1)
// Space complexity: O(1)w