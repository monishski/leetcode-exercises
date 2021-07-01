/**
 * @param {number} n
 * @return {boolean}
 */

const hasAlternatingBits = n => {
  const _n = n>>1 ^ n // shift by 1 and XOR with itself, this should result in 1s everywhere
  return (_n & (_n + 1)) === 0 ? true : false // added 1 to _n will make it like 1000000 so that when we & with _n again it will be 0
}

