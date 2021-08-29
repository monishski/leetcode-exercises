var guess = function(num): number { return 0 } //mock function

function guessNumber(n: number): number {
  let start = 0
  let end = n
  while (start <= end) { //if it was an array, then use <
    let mid = Math.floor((start + end) / 2) 
    let pick = guess(mid)
    if (pick === 0) {
      return mid
    } else if (pick === 1) {
      start = mid + 1
    } else {
      end = mid
    }
  }
};