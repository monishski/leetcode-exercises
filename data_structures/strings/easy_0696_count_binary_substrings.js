/**
 * @param {string} s
 * @return {number}
*/

// I could not answer this question.

// The clue is too to count the number of groups of consecutive 0's or 1's
// e.g for "0110001111" it will be [1, 2, 3, 4] 
// Then, for any possible substrings grouped by 0's or 1's, the number of valid substring will be the minimum of these 2 groups
// e.g. "0001111" it will be min(3,4) = 3

var countBinarySubstrings = function(s) {
  let result = 0, prev = 0, curr = 1
  for (let i = 1; i < s.length; i++) {
    if (s[i-1] !== s[i]) {
      result += Math.min(prev, curr)
      prev = curr
      curr = 1
    } else {
      curr++
    }
  }
  return result + Math.min(prev, curr)
}


