/**
 * @param {string} s
 * @return {boolean}
 */
 var ___validPalindrome = function(s) { //too slow (passed something like 425/450 cases)
  for (let i = 0; i < s.length ; i++) {
    let _s = s.substring(0, i) + s.substr(i+1)
    let start = 0 
    let end = _s.length - 1
    while (start < end) {
      if (_s[start] !== _s[end]) {
        break;
      }
      start++; end--;
    }
    if (start >= end) {
      return true;
    }
  }
  return false
};

const __validPalindrome = s => {
  for (let start = 0, end = s.length - 1; start < end; start++, end--) {
    if (s[start] !== s[end]) {
      let _s = s.substring(0, start) + s.substr(start+1) //string without start
      let s_ = s.substring(0, end) + s.substr(end+1) //string without end
      return _s === _s.split('').reverse().join('') || s_ === s_.split('').reverse().join('')
    }
  }
  return true
}

//I like this solution but you not be allowed to use 'substr' or 'split' or reverse... in which case, I would advise writing the isPalindrome function from scratch
const _validPalindrome = s => {
  for (let start = 0, end = s.length - 1; start < end; start++, end--) {
    if (s[start] !== s[end]) {
      return isPalindrome(s, start+1, end) || isPalindrome(s, start, end-1)
    }
  }
  return true
  
}

const isPalindrome = (s, start, end) => {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false
    }
    start++; end--;
  }
  return true
}

//There is one more solution worth keeping in mind, that's recursive
const validPalindrome = (s, skipped = false) => {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      if (skipped) { return false }
      return validPalindrome(s.substring(i, j), true) 
        || validPalindrome(s.substring(i+1, j+1), true)
    }
  }
  return true
}