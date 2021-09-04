function _countBits(n: number): number[] { 
  let result: number[] = []
  for (let i = 0; i <= n; i++) {
    let count = 0
    let temp = i
    while (temp > 0) {
      count += temp & 1
      temp = temp >> 1
    }
    result.push(count)
  } 
  return result
};

function countBits(n: number): number[] { 
  let result: number[] = new Array<number>(n + 1)
  for (let i = 0; i <= n; i++) {
    result[i] = (result[i >> 1] || 0) + (i & 1)
  }
  return result
}