/**
* @param {number} L
* @param {number} R
* @return {number}
*/
var _countPrimeSetBits = function(L, R) {
  let arr = []
  for(let i=L; i<=R; i++) {
    let count = 0
    let temp = i
    while (temp) {
      count += (temp & 1)
      temp >>= 1
    }
    arr.push(isPrime(count))
  }
  return arr.filter(Boolean).length
};

const isPrime = n => {
  if (n == 2) { 
    return true
  }
  if (n==0 || n==1 || n % 2 == 0) {
    return false
  } 
  for(let i=3; i<=parseInt(Math.sqrt(n))+1; i+=2) {
     if (n % i === 0) {
       return false
     } 
  }
  return true
}

const countPrimeSetBits = (L, R) => { //slower than above?
  let count = 0
  while (L<=R) {
    let nOnes = L.toString(2).split("").reduce((sum, val) => sum + parseInt(val), 0)
    count += (665772 >> nOnes) & 1 // 665772 is a special number where at the prime position its 1 and 0 elsewhere
    L++
  }
  return count
}