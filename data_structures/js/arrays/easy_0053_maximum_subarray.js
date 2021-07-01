/**
 * @param {number[]} nums
 * @return {number}
*/
var __maxSubArray = function(nums) {
  let sum = -1*Number.POSITIVE_INFINITY
  for(let i=0; i<nums.length; i++) {
    for(let j=i; j<nums.length; j++) {
      const _sum = nums.slice(i, j+1).reduce((sum, val) => sum+val, 0)
      sum = Math.max(sum, _sum)
    }
  }
  return sum
};
//The above is actually O(n^3) not O(n^2);

const _maxSubArray = nums => {
  let sum = -1*Number.POSITIVE_INFINITY
  for(let i=0; i<nums.length; i++) {
    let runningSum = 0
    for(let j=i; j<nums.length; j++) {
      runningSum += nums[j]
      sum = Math.max(sum, runningSum)
    }
  }
  return sum 
}
//This is O(n^2)

const maxSubArray = nums => {
  let max = nums[0]
  let maxCurrent = nums[0]
  for(let i=1; i<nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i])
    max = Math.max(max, maxCurrent)
  }
  return max
}
//The above solution is O(n) in time complexity
//This is known as Kadanes algorithm: https://www.youtube.com/watch?v=2MmGzdiKR9Y&ab_channel=BackToBackSWE

//There is Divique and Conquer approach that you could take... I am constrained for time rn...
//https://leetcode.com/problems/maximum-subarray/discuss/1136682/Javascript-Divide-and-Conquer-(with-BONUS-pictures!)