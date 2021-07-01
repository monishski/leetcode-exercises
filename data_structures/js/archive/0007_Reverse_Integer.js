/**
 * @param {number} x
 * @return {number}
*/
var _reverse = function(x) {
const result = parseInt(Math.abs(x).toString().substring().split("").reverse().join("")) * Math.sign(x)

if (Math.abs(result) > Math.pow(2, 31)) {
    return 0
}
return result
};
  
const reverse = (x) => {
let result = 0
while (Math.abs(x) >= 1) {
    let pop = x%10
    x = parseInt(x/10)
    result = result * 10 + pop
}
if (Math.abs(result) > Math.pow(2, 31)) {
    return 0
}
return result
}