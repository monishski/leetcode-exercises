/**
 * @param {string} s
 * @param {number} k
 * @return {string}
*/
var _reverseStr = function(s, k) {
  let sArr = s.split('')
  for(let i = 0; i < s.length; i+=2*k) {
    let start = i
    let end = i + k - 1 //this might need to be Math.min(i + k - 1, s.length - 1)
    // Because we may not reverse each block if there aren't enough characters
    while (start < end) {
      [sArr[start], sArr[end]] = [sArr[end], sArr[start]]
      start++; end--;
    }    
  }
  return sArr.join('')
};

const