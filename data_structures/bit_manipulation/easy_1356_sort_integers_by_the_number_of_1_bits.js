/**
 * @param {number[]} arr
 * @return {number[]}
*/
var _sortByBits = function(arr) {
  let nIterations = arr.length
  while (nIterations) {
    for(let j=0; j<arr.length-1; j++) {
      if (nOneBits(arr[j]) > nOneBits(arr[j+1])) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      } 
      else if (nOneBits(arr[j]) === nOneBits(arr[j+1]) && arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
    nIterations--
  }    
  return arr
};

const hash = new Map()

const nOneBits = n => {
  if (hash.has(n)) {
    return hash.get(n)
  }
  
  let count = 0;
  while (n) {
    count += (n & 1)
    n >>= 1
  }
  return count
} 

const sortByBits = arr => arr.sort((a, b) => { 
    let bitsA = nOneBits(a)
    let bitsB = nOneBits(b)
    if (bitsA === bitsB) {
      return a - b
    }
    return bitsA - bitsB
  })
