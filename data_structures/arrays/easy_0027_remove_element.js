/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var _removeElement = function(nums, val) {
  let count = 0
  for(let j=0; j<nums.length; j++) {
    if (nums[j] === val) {
      nums[j] = -1
      count++
    }
  }
  nums.sort((a, b) => b - a)
  return nums.length - count
};

//Solution
const removeElement = (nums, val) => {
  let i = 0;
  for(let j=0; j<nums.length; j++) {
    console.log(i, nums[i], j, nums[j])
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }
  return i
}
//Time complexity: O(n) (Assume the array has a total of n element, both i,j traverse at most in 2n steps)
//Space complexity: O(1)