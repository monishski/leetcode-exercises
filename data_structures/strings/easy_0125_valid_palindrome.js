/**
 * @param {string} s
 * @return {boolean}
*/
var _isPalindrome = function(s) {
  const _s = s.toLowerCase().replace(/[^a-z0-9]/ig, "")
  return _s === _s.split('').reverse().join('')
};

const isPalindrome = s => {

  const _s = s.toLowerCase().replace(/[^a-z0-9]/ig, "")

  let start = 0
  let end = _s.length - 1
  while (start < end) {
    if (_s[start] !== _s[end]) {
      return false
    }
    start++; end--;
  }
  return true
}