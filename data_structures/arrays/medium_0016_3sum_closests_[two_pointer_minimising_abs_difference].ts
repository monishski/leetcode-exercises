function threeSumClosest(nums: number[], target: number): number {
  let _nums = nums.sort((a, b) => a - b)
  let res = Math.min()

  let i = 0;
  while (i < _nums.length) {
    let l = i + 1
    let r = _nums.length - 1
    while (l < r) {
      let sum = _nums[i] + _nums[l] + _nums[r]
      res = Math.abs(sum - target) < Math.abs(res - target) ? sum : res
      if (sum > target) r--;
      else if (sum < target) l++;
      else {
        r--
        l++
      }
    }
    i++
  }
  return res  
};