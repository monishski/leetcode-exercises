function isPerfectSquare(num: number): boolean {
  if (num === 0) return false;
  if (num === 1) return true;
  let start = 0
  let end = num
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    
    if (mid * mid === num) {
      return true
    }
    
    if (mid * mid > num) {
      end = mid
    } else {
      start = mid + 1
    }
       
  }
  
  return false
};