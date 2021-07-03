/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
  let morseHash = {} //you could have used a set instead
  for (const word of words) {
    let morse = ''
    for (let i = 0; i < word.length; i++) {
      morse += morseTable[word[i].charCodeAt() - 97] //instead of 97, you can subtract 'a'
    }
    if (!morseHash[morse]) {
      morseHash[morse] = 0
    }
    morseHash[morse]++
  }
  return Object.keys(morseHash).length
};

const morseTable = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]