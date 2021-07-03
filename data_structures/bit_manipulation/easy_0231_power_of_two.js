/**
 * @param {number} n
 * @return {boolean}
 */

var _isPowerOfTwo = function(n) {
  let count = 0
  while (n > 0) {
    count += n & 1
    n = n >> 1
  }  
  return count === 1 ? true : false
};

const isPowerOfTwo = n => n > 0 ? !(n&(n-1)) : false;