/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
*/
var addStrings = function(num1, num2) {
  
  let result = ""
  let remainder = 0
  let n = num1.length - 1; m = num2.length - 1
  while(n >= 0 || m >= 0) {
    const sum = (+num1[n] || 0) + (+num2[m] || 0) + remainder
    // const sumStr = sum.toString() 
    const val = sum % 10
    result = val+'' + result 
    remainder = Math.floor(sum / 10) 

    // if (sum >= 10) { //this does do it but you can simplify it
    //   result = sumStr[sumStr.length-1] + result 
    //   remainder = 1
    // } else { 
    //   result = sumStr + result
    //   remainder = 0
    // }
    
    n--; m--;
  }
  
  if (remainder === 1) {
    result = "1" + result
  }
  
  return result
};