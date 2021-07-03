/**
 * @param {string} word
 * @return {boolean}
*/
var __detectCapitalUse = function(word) {
  if (word.toLowerCase() === word || word.toUpperCase() === word) return true;
  return word[0].toUpperCase() === word[0] && word.slice(1).toLowerCase() === word.slice(1)
  // return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};

const _detectCapitalUse = word => {
  const n = word.length
  let isMatch1 = true, isMatch2 = true, isMatch3 = true
  //All Capital
  for(let i = 0; i < n; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      // Note we have se the built in function to check if its upper case etc...
      // You can also use word.charAt(i) >= 'A' && word.charAt(i) <= 'Z'
      isMatch1 = false
      break;
    }
  }
  if (isMatch1) return true;
  
  //All lower case
  for(let i = 0; i < n; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      isMatch2 = false
      break;
    }
  }
  if (isMatch2) return true;
  
  //All not capital except the first
  if (word[0] !== word[0].toUpperCase()) {
    isMatch3 = false
  } else {
    for(let i = 1; i < n; i++) {
      if (word[i] !== word[i].toLowerCase()) {
        isMatch3 = false
        break;
      }
    }
  }
  if (isMatch3) return true;
  
  return false;
  
  //Note you can improve the above... notice that the biggest difference between case 2 and case 3 is the condition of the first char
  // if (n === 1) return true;
  // if (word[0] === word[0].toUpperCase() && word[1] === word[1].toUpperCase()) {
  //   for (let i = 0; i < n; i++) {
  //     if (word[i] === word[i].toLowerCase()) return false;
  //   }
  // } else {
  //   for (let i = 1; i < n; i++) { //here it doesnt matter if first letter is upper case or lower case
  //     if (word[i] === word[i].toUpperCase()) return false;
  //   }
  // }
  // return true;
}

const detectCapitalUse = word => {
  return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);
}  

//Note the speed of regex is highly dependant on its pattern and its implementation, the time complexity can vary from O(1) to O(2^n).