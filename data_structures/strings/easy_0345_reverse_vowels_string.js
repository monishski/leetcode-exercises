/**
 * @param {string} s
 * @return {string}
*/

var _reverseVowels = function(s) {
  const vowels = 'aeiouAEIOU'
  
  let start = 0
  let end = s.length - 1
  
  let sArr = s.split('')
  while(start < end) {
    if (vowels.indexOf(s[start]) !== -1) {
      while (vowels.indexOf(s[end]) === -1) {
        end--
      };
      [sArr[start], sArr[end]] = [sArr[end], sArr[start]];
      end--      
    }    
    start++

    // Here is the logic I was originally 'trying' to write 
    // if (vowels.indexOf(s[start]) !== -1 && vowels.indexOf(s[end]) !== -1) {
    //   [sArr[start], sArr[end]] = [sArr[end], sArr[start]];
    //   start++; end--
    // } 
    // if (vowels.indexOf(s[start]) === -1) start++;
    // if (vowels.indexOf(s[end]) === -1) end--;
  }
  return sArr.join('')
};

//Note there is a stack based solution for this 
var reverseVowels = s => {
  const vowels = 'aeiouAEIOU'
  let stack = []
  //Push all the vowel letters into the stack first
  for(let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      stack.push(s[i])
    }
  }
  //Now go through the string again and replace any sequential occurance of a vowel with that last poped from the stack
  let result = []
  for(let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      result.push(stack.pop())
    } else {
      result.push(s[i])
    }
  }
  return result.join('')
}









