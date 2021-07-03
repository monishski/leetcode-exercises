/**
  * @param {string} s
  * @return {number}
*/
var __firstUniqChar = function(s) {
  const hash = {}
  for(let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = {
        count: 0,
        index: i
      }
    }
    hash[s[i]].count++
  }
  for (const [key, value] of Object.entries(hash)) {
    if (value.count === 1) {
      return value.index
    }
  }
  return -1;  
};

//Note there is a neat solution that uses .lastIndexOf method (it tell you the index if you were to beginning from the end?)
const _firstUniqChar = s => {
  for(let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1
}

//Other solutions also use Hash and Search but are so much cleaner
const firstUniqChar = s => {
  const map = {}
  for(let char of s) {
    map[char] ? map[char]++ : map[char] = 1 //could set map[s] = 2 and not increment any further
  }
  for(let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i
    }
  }
  return -1
}