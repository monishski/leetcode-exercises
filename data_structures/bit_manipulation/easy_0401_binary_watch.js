/**
* @param {number} turnedOn
* @return {string[]}
*/

const binaryOnes = n => {
  let count = 0;
  while (n) {
    count += (n & 1)
    n = n >> 1
  }
  return count
}

var readBinaryWatch = function(turnedOn) {
  const result = []
  for(let hour=0; hour<12; hour++) {
    for(let minute=0; minute<60; minute++) {
      if ((binaryOnes(hour) + binaryOnes(minute)) === turnedOn) {
        result.push(`${hour}:${String(minute).padStart(2, '0')}`)
      }
    }
  }
  return result
}