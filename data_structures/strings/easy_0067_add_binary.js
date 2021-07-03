/**
 * @param {string} a
 * @param {string} b
 * @return {string}
*/
var __addBinary = function(a, b) { //you can get around this using BigInt
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
  //return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
}; //this only works with small numbers

const binaryAddition = (a, b) => {
  if ((a === "1" && b === "0") 
    || (a === "0" && b === "1")) {
    return "1"
  }
  return "0"
}

const binaryRemainder = (a, b, r) => {
  if ((a === "1" && b === "1") || (r === "1" && (a === "1" || b ==="1"))) {
    return "1"
  } 
  return "0"
}

var _addBinary = (a, b) => {
  const n = a.length, m = b.length
  if (n != m) {
    if (n > m) {
      b = new Array(n-m+1).join('0') + b
    } else {
      a = new Array(m-n+1).join('0') + a
    }
  }
  const length = a.length //both strings should have the same length now
  let remainder = "0"
  let result = ""
  for(let i = length - 1; i >= 0; i--) {
    console.log(a[i], b[i], remainder, result)
    result = binaryAddition(binaryAddition(a[i], b[i]), remainder) + result
    remainder = binaryRemainder(a[i], b[i], remainder)
    
  }
  if (remainder === "1") {
    result = "1" + result
  }
  return result
}

//Note this is the truth table 
//a + b + carry = val, new_carry

//0 + 0 + 0 = 0, 0

//1 + 0 + 0 = 1, 0 (NET SUM IS 1)
//0 + 1 + 0 = 1, 0 (NET SUM IS 1)
//0 + 0 + 1 = 1, 0 (NET SUM IS 1)

//1 + 1 + 0 = 0, 1 (NET SUM IS 2)
//0 + 1 + 1 = 0, 1 (NET SUM IS 2)
//1 + 0 + 1 = 0, 1 (NET SUM IS 2)

//1 + 1 + 1 = 1, 1 (NET SUM IS 3)

//Note that this is summary also as follow:
//If NET SUM >= 2, THEN val = sum % 2, carry = 1 ELSE val = 0, carry = 0

const truth_table = {
  0: ["0", 0], //NET SUM: [sum, carry]
  1: ["1", 0],
  2: ["0", 1],
  3: ["1", 1]
}

const addBinary = (a, b) => {
    
  let n = a.length - 1, m = b.length - 1
  let remainder = 0
  let result = ""
  
  while(n >= 0 || m >= 0) {
    const [val, new_remainder] = truth_table[(+a[n] || 0) + (+b[m] || 0) + remainder]
    result = val + result
    remainder = new_remainder
    n--; m--;
  }
  
  if (remainder === 1) {
    result = "1" + result
  }
  
  return result
}
