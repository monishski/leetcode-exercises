/**
 * @param {number} n
 * @return {number}
*/
var _rotatedDigits = function(n) {
  let count = 0
  for (let i = 0; i <= n; i++) {
    let _i = i.toString().split('').map(val => rotationMap[val]+'').join('')
    if (!isNaN(_i) && _i !== i.toString()) {
      count++
    }
  }
  return count
};

const rotationMap = {
  0: 0,
  1: 1,
  2: 5,
  3: undefined,
  4: undefined,
  5: 2,
  6: 9,
  7: undefined,
  8: 8,
  9: 6
}

const rotatedDigits = n => {
  let count = 0
  for (let m = 0; m <= n; m++) {
    let mStr = m.toString()
    if (mStr.includes("3") || mStr.includes("4") || mStr.includes("7")) continue;
    if (mStr.includes("2") || mStr.includes("5") || mStr.includes("6") || mStr.includes("9")) count++;
    //the 2nd if statement is only executed if there are 3/4/7 and it means it must be a valid number
    //So we check if it includes any of 2/5/6/9 for rotations..
  }
  return count
}

//Just a note there is a solution in the discussions which takes a DP approach