function _nextGreatestLetter(letters: string[], target: string): string {
  let start = 0, end = letters.length
  let mid;
  while (start < end) {
    mid = start + Math.floor((end - start) / 2)
    if (letters[mid].charCodeAt(0) > target.charCodeAt(0)) {
      end = mid 
    } else {
      start = mid + 1
    }
  }
  
  return target.charCodeAt(0) >= letters[letters.length - 1].charCodeAt(0) 
    ? letters[0] 
    : letters[start]
}; 

function nextGreatestLetter(letters: string[], target: string): string {
  for (const char of letters) {
    if (target.charCodeAt(0) < char.charCodeAt(0)) {
      return char
    }
  }
  return letters[0]
}