/**
* @param {string} s
* @param {string} t
* @return {character}
*/
var _findTheDifference = function(s, t) {
  let sArr = s.split("").sort()
  let tArr = t.split("").sort()
  for(let i = 0; i < tArr.length; i++) {
    if (sArr[i] !== tArr[i]) {
      return tArr[i]
    }
  }
};

const findTheDifference = (s, t) => {
  let result = 0
  for(let i=0; i < s.length; i++) {
    result ^= s.charCodeAt(i)
  }
  for(let j=0; j < t.length; j++) {
    result ^= t.charCodeAt(j)
  }
  //Instead of 2 loops above, you could have had 1 loop (based on the strong string s)
  //And then just apply ^= t[i].charCodeAt()
  return String.fromCharCode(result)
}