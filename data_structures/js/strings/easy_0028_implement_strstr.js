/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var _strStr = function(haystack, needle) {
  if (needle === '') return 0;
  for(let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i
    }
  }
  return -1
};

//Dont use built in methods!
const strStr = (haystack, needle) => { //this is based on one of the solutions on discussions
  if (needle === '') return 0;
  
  for(let i = 0; i < haystack.length; i++) {
    // if (haystack[i] === needle[0]) {
    //   for(let j = 0; j < needle.length; j++) {
    //     if (haystack[i + j] !== needle[j]) break;
    //     else if (j === needle.length - 1) return i;
    //   }
    // }
    
    let j = 0 //You can write the above if statement with a while loop as well
    while (haystack[i+j] === needle[j] && j < needle.length) j++
    if (j === needle.length) return i
    
  }
  return -1
}

