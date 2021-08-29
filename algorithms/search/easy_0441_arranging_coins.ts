function _arrangeCoins(n: number): number {
  let row = 0
  while (n > 0) {
    row++    
    n -= row
  }
  return n < 0 ? row - 1 : row
};

//the completed rows contain a total of 1 + 2 + ... + k(k+1)/2 coins
//if you rephrase it as: find the maximum k such as k(k+1) / 2 <= N
function arrangeCoins(n: number): number {
  let start = 0, end = n
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (mid * (mid + 1) / 2 === n) return mid
    
    if (mid * (mid + 1) / 2 > n) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return end
}