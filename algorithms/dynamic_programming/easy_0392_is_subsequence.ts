function _isSubsequence(s: string, t: string): boolean {
  let i = 0, j = 0
  while (j < t.length) {
    if (s[i] === t[j]) i++
    j++
  }
  return i === s.length
};

// You can also solve this using DP
function isSubsequence(s: string, t: string): boolean {
  let m = s.length, n = t.length;
  
  let dp: number[][] = []
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m][n] === m
}