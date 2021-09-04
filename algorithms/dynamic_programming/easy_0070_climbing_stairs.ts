function __climbStairs(n: number): number {
  let dp: Array<number> = new Array(n + 1)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};

//Note, this can also be solved more optimally using Fibonacci
const _climbStairs = (n: number): number => {
  let prev = 0
  let curr = 1
  let temp: number; //3rd pointer
  for (let i = 1; i <= n; i++) {
    temp = prev //store 1 side to 3rd pointer
    prev = curr //update that side to point to curr
    curr += temp 
  }
  return curr
}

// You can use memoization to further optimise the problem
let memo: number[] = []
const climbStairs = (n: number): number => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (memo[n]) return memo[n]
  let result = climbStairs(n-1) + climbStairs(n-2)
  memo[n] = result
  return result
}