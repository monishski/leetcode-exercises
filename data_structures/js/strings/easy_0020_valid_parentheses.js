/**
 * @param {string} s
 * @return {boolean}
*/
var __isValid = function(s) { //the below is fundamentally broken, see the solution of the problem... it only works if the brackets are of the same type
  const n = s.split('').length
  let counters = {
    '(': 0,
    '[': 0,
    '{': 0
  }
  for(let i = 0; i < n; i++) {
    counters[bracketsMap[s[i]]] += incrementMap[s[i]]
  }
  console.log(counters)
  return Object.values(counters).reduce((acc, val) => val >= 0 ? acc + val : acc) === 0
}
  
const bracketsMap = {
  '(': '(',
  ')': '(',
  '[': '[',
  ']': '[',
  '{': '{',
  '}': '{'
}

const incrementMap = {
  '(': 1,
  ')': -1,
  '{': 1,
  '}': -1,
  '[': 1,
  ']': -1
}

const _isValid = s => { //my implementation of the STACK solution
  if (s.length % 2 === 1) return false;
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const stack = [s[0]]
  for(let i = 1; i < s.length; i++) {
    if (s[i] === map[stack[stack.length - 1]]) stack.pop();
    else stack.push(s[i]);
  }
  return !stack.length 
}
//Time complexity is O(n) because we tranverser the given string one at a time and push and pop operation on a stack take O(1) time
//Space complexity is O(n) as we push all the opening brackets onto the stack and in the worst case, we will end up pushing tall the brackets (opening) onto the stack

//You can optimise this a little bit
const isValid = s => {
  //https://leetcode.com/problems/valid-parentheses/discuss/485550/100-Time-With-Optimizations-%2B-Explanation
  if (s.length % 2 === 1) return false;
  const stack = []
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for(let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      if (stack[stack.length-1] === map[s[i]]) stack.pop();
      else return false; //I havent fully understood this last bit of returning false
    } else {
      stack.push(s[i])
    }
  }
  return !stack.length
}