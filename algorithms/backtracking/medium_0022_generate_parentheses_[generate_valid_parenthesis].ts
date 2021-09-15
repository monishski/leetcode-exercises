// https://www.youtube.com/watch?v=s9fokUqJ76A&ab_channel=NeetCode 
// Great explanation to solving this problem using backtracking! (Solution in my attempt)
function generateParenthesis(n: number): string[] {
  return backtracking(0, '', 0, 0, n, [])
};

const backtracking = (index: number, 
  str: string, 
  open: number, 
  close: number, 
  n: number,
  result: string[]): string[] => {
  
  if (index === (n * 2)) {
    result.push(str)
    return result
  }
  
  if (open < n) {
    backtracking(index + 1, str + '(', open + 1, close, n, result)
  } 
  
  if (open > close) {
    backtracking(index + 1, str + ')', open, close + 1, n, result)
  }
  
  // My original attempt below is terrible
  // if (open > close && open < n) {
  //   backtracking(index + 1, str + '(', open + 1, close, n, result)
  //   backtracking(index + 1, str + ')', open, close + 1, n, result)
  // } else if (open === close) {
  //   backtracking(index + 1, str + '(', open + 1, close, n, result)
  // } else if (open === n) {
  //   backtracking(index + 1, str + ')', open, close + 1, n, result)
  // }
  
  return result
}
//The time complexity is O(4^n/sqrt(n))... the valid sequence has at most n steps during the backtracking procedure?