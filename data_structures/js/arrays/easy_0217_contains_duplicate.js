/**
 * @param {number[]} nums
 * @return {boolean}
 */
var _containsDuplicate = function(nums) {
  nums.sort()
  for(let i=1; i<nums.length; i++) {
    if (nums[i] === nums[i-1]) {
      return true
    }
  }
  return false
};
//Time complexity is O(nlogn)... sorting is O(nlogn) and the sweeping is O(n)
//Space complexity is O(1) [sorting is done in place]

const containsDuplicate = nums => {
  const hash = {}
  for(let i=0; i<nums.length; i++) {
    if (hash[nums[i]]) {
      return true
    }
    hash[nums[i]] = 1
  }
  return false
}
//Time complexity O(n), we do search() and insert() for n times
//Space complexity O(n)