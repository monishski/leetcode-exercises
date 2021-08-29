function search(nums: number[], target: number): number {
  let start = 0, end = nums.length
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (target === nums[mid]) return mid
    
    if (target > nums[mid]) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  return - 1
};