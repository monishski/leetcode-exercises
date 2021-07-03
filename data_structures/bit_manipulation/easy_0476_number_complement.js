/**
* @param {number} num
* @return {number}
*/

const denary2binary = n => n.toString(2) //Can't operate with actually binary as they are stored as 32+ bits (so all leading 0's would be converted to 1)

var _findComplement = function(num) {
  let stringBinary = denary2binary(num)
  let result = ""
  for (let i=0; i<stringBinary.length; i++) {
    result += (parseInt(stringBinary[i]) ? "0" : "1")
  }
  return parseInt(result, 2)
};

const findComplement = n => {
  let mask = ~0 //i.e a bunch of 1's
  while (n & mask) {
    mask <<= 1
  }
  return ~mask & ~n
}