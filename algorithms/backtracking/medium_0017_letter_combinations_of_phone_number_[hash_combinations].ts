const map: { [key: string]: string } = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
}

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return []
  return backtracking(0, '', digits, [])
};

//https://www.youtube.com/watch?v=0snEunUacZY&ab_channel=NeetCode
function backtracking(index: number, str: string, digits: string, res: string[]): string[] {
  if (index === digits.length) {
    res.push(str)
    return res
  }
  let chars: string = map[digits[index]]
  for (let i = 0; i < chars.length; i++) {
    backtracking(index + 1, str + chars[i], digits, res)
  }
  return res
}
//Time complexity is O(n * 4^n)