https://stackoverflow.com/questions/43002447/longest-substring-non-repeating-characters-javascript
function _lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  let max = Number.NEGATIVE_INFINITY
  let temp = ''
  for (let i = 0; i < s.length; i++) {
    let pos = temp.indexOf(s[i])
    if (pos !== -1) { //arh I was nearly there!
      temp = temp.substring(pos + 1)
    }
    temp += s[i] 
    max = Math.max(max, temp.length)
  }
  return max
};

//The above solution works but the discussion is heavily focussed around the SLIDING WINDOW solution that uses a set
function lengthOfLongestSubstring(s: string): number { //I like this
  if (s.length === 0) return 0; 
  const set = new Set<string>() 
  let left = 0
  let right = 0
  let max = Number.NEGATIVE_INFINITY
  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right])
      max = Math.max(max, set.size)
      right++
    } else {
      set.delete(s[left]) //think "vdfed"
      left++
    }
  }
  return max
};