/**
 * @param {number[]} nums
 * @return {number}
 */
 var _missingNumber = function(nums) {
  nums.sort((a, b) => a - b)
  for(let i=0; i<nums.length; i++) {
    if (i !== nums[i]) {
      return i
    }
  }
  return nums.length
};
// Time complexity: O(nlogn)
// Space complexity: O(1) or O(n) (we sorted nums in place but if it is forbidden we would need to allocate space to it)

var missingNumber = nums => {
  let result = nums.length
  for (const [index, elem] of nums.entries()) {
    result ^= index ^ elem
  }
  return result
}
// Time complexity: O(n) assuming XOR is a constant-time operation
// Space complexity: O(1)

const missingNumber = nums => nums
  .reduce((result, elem, index) => result^elem^index, nums.length);
// The above is slightly neater

