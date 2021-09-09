function _divide(dividend: number, divisor: number): number {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  let sign = dividend >= 0 === divisor >= 0
  let _dividend = Math.abs(dividend)
  let _divisor = Math.abs(divisor)

  let quotient = 0
  while (_dividend >= _divisor) {
    let count = 0
    while (_dividend >= (_divisor << 1 << count)) { 
      count++
    }
    _dividend -= _divisor << count
    quotient += 1 << count
  } 
  return sign ? quotient : -1 * quotient
  // return (dividend >= 0 && divisor >= 0) 
  //   || (dividend <= 0 && divisor <= 0) ? quotient : -1 * quotient
};
  
//Unfortuantely the above doesnt work is JS very well and times out
function divide(dividend: number, divisor: number): number {
  if (divisor === 0 || dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  let sign = dividend >= 0 === divisor >= 0
  let _dividend = Math.abs(dividend)
  let _divisor = Math.abs(divisor)

  let quotient = 0
  let base = _divisor
  while (_dividend >= _divisor) {
    let count = 0
    base = _divisor
    // while (_dividend >= base << 1) { //this results in TLE
    while ((_dividend >> 1) >= base) { 
      base = base << 1
      count++
    }
    _dividend -= base
    quotient += 1 << count   
  } 
  return sign ? quotient : -1 * quotient
};
  
