// https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/
// The brute force solution passes the tests but fails the submission!
function __longestPalindrome(s: string): string {
  let longest = ''
  for (let i = 0; i < s.length; i++) {
    let substring = ''
    for (let j = i; j < s.length; j++) {
      substring += s[j]
      if (isPalidrome(substring) && substring.length > longest.length) {
        longest = substring
      }
    }
  }
  return longest
}; //Time complexity is O(n^3)

const isPalidrome = (s: string): boolean => {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++; j--;
  }
  return true  
}


// https://www.youtube.com/watch?v=0CKUjDcUYYA&ab_channel=Errichto # ~ 20 mins is super useful to understand j index
function _longestPalindrome(s: string): string {
  let n = s.length
  if (n <= 1) return s;
  
  let dp = new Array()
  let result = ''
  
  // Since s[i] === s[j] when i === j, set them true
  for (let i = 0; i < n; i++) {
    dp.push(new Array(n + 1).fill(false))
    dp[i][i] = true
    result = s[i]
  }
  
  // Check for any directly adjacent equal letter s[i] === s[j] where j = i + 1
  for (let i = 0; i < n; i++) {
    let j = i + 1
    if (s[i] === s[j]) {
      dp[i][j] = true
      result = s.substring(i, j + 1)
    }
  }
  
  // Check for palidromes of length greater than 3 using the results above basically 
  // Iterative over string, with j = i + k - 1 
  for (let k = 3; k <= n; k++) {
    for (let i = 0; i < n - k + 1; i++) {
      let j = i + k - 1
      // dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]       
      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true
        if (k > result.length) {
          result = s.substring(i, j + 1)
        }
      }
    }
  }
  return result
}
// Time complexity is O(n^2) and run time complexity is O(n^2), space complexity is same as we store the table

// You can improve on the above using the symmetry fact of palidrome (space complexity O(1))
function longestPalindrome(s: string): string {
  let n = s.length;
  if (n <= 1) return s;
  let start = 0, end = 0;
  for (let i = 0; i < n; i++) {
    let len1 = expand(s, i, i) //odd length
    let len2 = expand(s, i, i + 1) //even length //2n - 1 midde point checks...
    let len = Math.max(len1, len2);
    console.log(i, len1, len2, len)
    if (len > end - start) {
      start = Math.ceil(i - (len - 1) / 2);
      end = i + len / 2;
    }
    console.log(start, end)
  }
  return s.substring(start, end + 1) //floats dont matter
}

function expand(s: string, start: number, end: number): number {
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    start--; end++
  }
  return end - start - 1 //length
}