/**
 * @param {string} s
 * @return {boolean}
*/
var _checkRecord = function(s) {
  let absentDays = 0
  let isLate3Days = false
  for(let i = 0; i < s.length; i++) { //can also have absentDays < 2 in the loop!
    if (s[i] === 'A') absentDays++;
    if (s[i] === 'L' && s[i+1] === 'L' && s[i+2] === 'L') {
      isLate3Days = true
    }
    //You could bring all this to 1 line & have:
    // absentDays += (s[i] === 'A') + 2 * (s[i] === 'L' && s[i+1] === 'L' && s[i+2] === 'L')
  }  
  return absentDays < 2 && !isLate3Days;
};

const checkRecord = s => {
    return !/(A.*A|LLL)/.test(s); // check if there are more than 2 As and 3 continuous Ls
}