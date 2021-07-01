/**
 * @param {string} a
 * @param {string} b
 * @return {number}
*/
var findLUSlength = function(a, b) {
  if (a === b) return -1; //if both strings are indentical, no subsequence will be uncommon
  return Math.max(a.length, b.length)
};