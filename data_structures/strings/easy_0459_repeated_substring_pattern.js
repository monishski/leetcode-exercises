/**
 * @param {string} s
 * @return {boolean}
*/ 
var _repeatedSubstringPattern = function(s) {
  //I was trying hard to implement this but could not convey the message / logic across succintly
  let pattern = ''
  for(let i = 0; i < Math.floor(s.length); i++) {
    pattern += s[i]
    if (pattern.repeat(s.length / (i + 1)) === s) { //I didn't know repeat was a function
      return true
    } 
  }
  return false
};

//Basically, there are 2 solutions to this problems...
//One is brute force but logical, the second is some genuis play

const repeatedSubstringPattern = s => s.repeat(2).slice(1, -1).includes(s)

// S = 'abcdabcd' has 2 repeating substrings 'abcd' of length 4
// S + S = 'abcdabcdabcdacbd' has 4 repeating substring of 'abcd' of length 4
// By destroying the first and last pattern (this can be any character, above we remoed the very first and very last character) we generate a new string
// If the string has a repeatable pattern, this new string will include S in it

// The closes thing for a proof that I understood was the following:
// If S is made of 'k' substrings, the S + S is made up of '2k' substring
// But destroying the first and last patterns, you are left with '2k - 2' pattern inside
// Note that k >= 2 for it to be repeating substring => '2k - 2 >= k' 

// S = 'abcbca'
// S + S = 'abcbcaabcbca'
// (S+S).slice(1, -1) = 'bcbcaabcbc' //does not include 'abcbca'

// S = 'aba'
// S + S = 'abaaba'
// (S+S).slice(1, -1) = 'baab' //does not include 'aba'