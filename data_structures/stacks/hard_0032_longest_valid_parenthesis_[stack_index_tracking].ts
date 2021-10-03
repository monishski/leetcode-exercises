//The are a couple of solutions to this problem, I couldnt solve it straight away :(
//I have only shown the stack solution below
function longestValidParentheses(s: string): number {
  //Push index onto stack if open bracket and pop if close
  let stack: number[] = [];
  stack.push(-1); //this is to make sure the maths adds up, e.g. (), here peek = -1 and i = 1

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i); //even though this is close, we push it onto the stack for reference
      } else {
        let peek = stack[stack.length - 1];
        res = Math.max(res, i - peek); //e.g ((), would be -1, 0, 1 -> but as you pop, peek = 0, so i - peek = 2 - 0 = 2
      }
    }
  }
  return res;
}
