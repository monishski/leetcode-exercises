var _backspaceCompare = function(s, t) {
  let stackS = build(s)
  let stackT = build(t)
  return stackS.join('') === stackT.join('') //cant compare stackS === stackT in JS
};

const _build = s => {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') stack.pop();
    else stack.push(s[i]);
  } 
  return stack
}

//You can solve this working backwards...
const backspaceCompare = (s, t) => {
  return build(s) === build(t)
}

const build = s => {
  let result = ''
  let skips = 0
  for(let i = s.length - 1; i >=0; i--) {
    if (s[i] === '#') skips++;
    else if (skips > 0) skips--; //reset counter
    else result = s[i] + result
  }
  return result
}