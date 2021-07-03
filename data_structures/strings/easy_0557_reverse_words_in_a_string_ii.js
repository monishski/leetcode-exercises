/**
 * @param {string} s
 * @return {string}
*/ 
var __reverseWords = function(s) {
  let sArr = s.split('')
  for(let i = 0; i < s.length; i++) {
    let start = i
    let end = i
    while (s[i] !== ' ' && i < s.length) {
      end++; i++;
    }
    while (start < end-1) {
      [sArr[start], sArr[end-1]] = [sArr[end-1], sArr[start]]
      start++; end--;
    }
  }
  return sArr.join('')
};

//Note the simplest solution is also allow
const _reverseWords = s => {
  return s.split(' ').map(word => word.split('').reverse().join('')+" ").join(' ')
}

const reverseWords = s => {
  let result = ''
  let word = ''
  for(let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      word = s[i] + word
    } else {
      result += word + ' '
      word = ''
    }
  }
  return result + word
}