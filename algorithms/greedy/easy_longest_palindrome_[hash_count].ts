function _longestPalindrome(s: string): number {
  let hash: { [key: string]: number } = {}
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1
  }
  let result = 0
  let odd = false
  for (const [key, value] of Object.entries(hash)) {
    if (value % 2 !== 0) {
      result += (value - 1);
      odd = true
    }
    else result += value
  }
  return odd ? result + 1 : result
};

//Cleaner version
function longestPalindrome(s: string): number {
  let hash: { [key: string]: number } = {}
  let result = 0 
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1
    if (hash[s[i]] % 2 === 0) result += 2
  }
  return result === s.length ? result : result + 1
}
