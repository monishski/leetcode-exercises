/**
 * @param {string} s
 * @return {number}
*/
var _romanToInt = function(s) {
  let sum = 0
  for(let i = 0; i < s.length; i++) {
    if ((s[i] === 'I' && (s[i+1] === 'V' || s[i+1] === 'X'))
      || (s[i] === 'X' && (s[i+1] === 'L' || s[i+1] === 'C'))
      || (s[i] === 'C' && (s[i+1] === 'D' || s[i+1] === 'M'))) {
      sum += romanToIntMap[s[i] + s[i+1]]
      i++ //skip the next index
    } else {
      sum += romanToIntMap[s[i]]
    }
  }
  return sum
};

const romanToIntMap = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
}


//The solution below basically realises that if the trailing value is less than the subsequent value, we subtract the current value from the sum!
const data = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}

var romanToInt = function(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++){
      data[s[i]] < data[s[i+1]] 
        ? sum -= data[s[i]]
        : sum += data[s[i]]
  }
  return sum
};