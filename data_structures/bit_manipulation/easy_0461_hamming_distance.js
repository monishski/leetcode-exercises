/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let result = x ^ y
  let count = 0
  while (result > 0) {
    count += (result & 1)
    result = result >> 1
  }
  return count
};