/**
 * @param {string} s
 * @return {number}
*/ 
var _lengthOfLastWord = function(s) {
  return s.trim().split(" ").pop().length;
};

//I guess if you were forced to use brute force
const lengthOfLastWord = s => {
  let start = false
  let length = 0
  for(let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') start = true;
    if (start) {
      if (s[i] === ' ') break;
      length++
    }
  }
  return length  
}

//There is one more way which is worth noting...
//That is that you scan left to right
//Where it is not a white space you keep adding to kepth and keep updating another variable in parrallel called max
//If it encounters a white space, then reset to 0...