/**
 * @param {string} str
 * @return {string}
*/
var toLowerCase = function(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i)
    if(charCode < 65 || charCode > 90) {
      result += str[i]
    } else {
      result += String.fromCharCode(charCode + 32)
    }
    // result += (str[i] >= 'A' || str[i] <= 'Z') ? String.fromCharCode(str[i].charCodeAt(0) + 32) : str[i]
  }
  
  return result
};