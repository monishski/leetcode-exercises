function _mySqrt(x: number): number {   
  if (x === 0) return 0
  let last: number;
  for (let i = 0; i <= x; i++) {
    if (i * i > x) break;
    last = i
  }
  return last
};

function mySqrt(x: number): number {
  if (x === 0) return 0;
  let start = 0 
  let end = x
  let mid = 0
  while (start <= end) {
    mid = Math.floor((start + end) / 2)

    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
      return mid
    }
    
    if (mid * mid < x) {
      start = mid + 1
    } else {
      end = mid - 1
    } 
  }
  return mid
}