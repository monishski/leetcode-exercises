/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
*/
var _canConstruct = function(ransomNote, magazine) {
  let n = ransomNote.length, m = magazine.length
  if (m < n) return false;
  
  let _ransomNote = ransomNote.split('') //bad for space complexity!
  let count = 0
  for(let i = 0; i < m; i++) {
    const index = _ransomNote.indexOf(magazine[i]) 
    if (index !== -1) {
      _ransomNote[index] = -1
      count++
    }
  }
  return count === n

  //So the alternative, would have been to check if all the chracters exist in magazine, and ammend magazine
  // let count = 0;
  // for(let i = 0; i < n; i++) {
  //   if (magazine.includes(ransomNote[i])) {
  //     mangazine = magazine.replace(ransomNote[i], '') //update magazine 
  //     count++
  //   }
  // }
  // return count === n
  
  //I particularly like this O(n) solution
  // let _magazine = magazine.split('')
  // for(const letter of ransomNote) {
  //   const index = _magazine.indexOf(letter)
  //   if (index < 0) return false;
  //   _magazine[index] = -1
  // }
  // return true
};

//The alternative is to use a Hash table
const canConstruct = (ransomNote, magazine) => {
  let n = ransomNote.length, m = magazine.length
  const hash = {}
  for(let i = 0; i < m; i++) {
    if (!hash[magazine[i]]) {
      hash[magazine[i]] = 0
    }
    hash[magazine[i]]++
  }

  let count = 0
  for(let i = 0; i < n; i++) {
    if (hash[ransomNote[i]]) {
      count++
    }
    hash[ransomNote[i]]--
  }

  return count === n
}