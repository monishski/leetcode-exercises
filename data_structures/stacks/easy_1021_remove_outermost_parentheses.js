var _removeOuterParentheses = function(s) {
  let stack = []
  let result = ''
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && !(stack.length === 1 && s[i] === ')')) result += s[i];
    if (s[i] === '(') stack.push(s[i])
    else stack.pop()
  }
  return result
};

//You could actually do this without a stack & just with a counter
var removeOuterParentheses = function(s) {
  let counter = 0
  let result = ''
  for (let i = 0; i < s.length; i++) {
    if (counter > 0 && !(counter === 1 && s[i] === ')')) result += s[i];
    if (s[i] === '(') counter++
    else counter--
  }
  return result
};


