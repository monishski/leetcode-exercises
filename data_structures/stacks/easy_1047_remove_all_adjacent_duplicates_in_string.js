var _buildArray = function(target, n) {
  let output = []
  let index = 0
  let pushCount = 0
  for (let i = 1; i <= n; i++) {
    if (i === target[index]) {
      output.push('Push')
      index++
    } else {
      output.push('Push', 'Pop')
    }
    pushCount++ //if you loop through target, you dont need pushCount variable
    if (pushCount === target[target.length-1]) break; 
  }
  return output
};

//The solution is almost there (the above works)
const buildArray = (target, n) => {
  let output = []
  let j = 1
  for (let i = 0; i < target.length; i++) {
    if (j === target[i]) {
      output.push('Push')
    } else {
      output.push('Push', 'Pop')
      i--
    }
    j++
  }
  return output
}