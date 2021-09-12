function _myAtoi(s: string): number {
  let _s = s.trim()
  let sign = 1
  if (_s[0] === '-' || _s[0] === '+') { //check for signs
    sign = _s[0] === '-' ? -1 : 1; 
    _s = _s.substr(1); //remove sign
  }
  
  while (_s[0] === '0') { //check for leading zeros
    _s = _s.substr(1) //remove leading zeros
  }

  let intPassed = false
  let result = 0
  for (let i = 0; i < _s.length; i++) {
    if (!intPassed && /[A-Za-z\s\+\-\.]/.test(_s[i])) return 0; //if encounter a char before num, return early
    if (intPassed && /[A-Za-z\s\+\-\.]/.test(_s[i])) break; //if we encounter a char after num, stop loop
    intPassed = true
    result = result * 10 + (+_s[i])
  }
  
  let res = sign * result
  if (res > 2 ** 31 - 1) return 2 ** 31 - 1
  else if (res < -1 * 2 ** 31) return -1 * 2 ** 31

  return res
};

//Cleaned up
function myAtoi(s: string): number {
  let i = 0
  let res = 0
  let sign = 1;
  let MIN = -1 * 2 ** 31
  let MAX = 2 ** 31 - 1
  let _s = s.trim()
  if (_s[i] === '-' || _s[i] === '+') {
    sign = _s[i] === '-' ? -1 : 1; //i++ can do in the bracket
    i++
  }
  while (_s[i] && _s[i].charCodeAt(0) - 48 <= 9 && _s[i].charCodeAt(0) - 48 >= 0) {
    res = res * 10 + (_s[i].charCodeAt(0) - 48); //i++ can do in the bracket
    i++
  }
  let result = sign * res
  return result <= MIN ? MIN : result >= MAX ? MAX : result
}