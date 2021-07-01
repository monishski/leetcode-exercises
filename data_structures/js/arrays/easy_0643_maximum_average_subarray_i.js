/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var _findMaxAverage = function(nums, k) {
  let maxAvg = Number.NEGATIVE_INFINITY
  for(let i = 0; i < nums.length - k + 1; i++) {
    let sum = 0
    for(let j = i; j < i + k; j++) {
      sum += nums[j]
    }
    maxAvg = Math.max(maxAvg, sum/k)
  }
  return maxAvg
};

const findMaxAverage = (nums, k) => {
  //Instead of creating an array of sums 
  //We can interate in O(n) time and O(1) space complexity by just keeping track of the maximum sum
  //We first iterate from i=0 to k-1 to get the sum at index k-1
  //then interate from k to nums.length-1 and update the sum 
  //The sum at the current position is old sum + current value - value at position i - k
  for(let i = 1; i < nums.length; i++) {
    nums[i] += nums[i-1]
  }
  let maxAverage = nums[k-1] / k
  for(let i = k; i < nums.length; i++) {
    maxAverage = Math.max(maxAverage, (nums[i] - nums[i-k]) / k)
  }
  return maxAverage  
}
//Both time and space complexity are O(n)

