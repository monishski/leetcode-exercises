/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var _twoSum = function(nums, target) {
  for(let i=0; i<nums.length; i++) {
    for(let j=i+1; j<nums.length; j++) {
      if ((nums[i] + nums[j]) === target && i !== j) {
        return [i, j]
      }
    }
  }
};
//Time complexity: O(n^2)
//Space complexity: O(1)

//You can reduce the time complexity to O(n) by using a hash table
const twoSum = (nums, target) => {
  const hash = {} //hash offers support for fast lok up in near O(1) (if collision, this could become O(n))
  for(let i=0; i<nums.length; i++) {
    const _target = target - nums[i]
    if (hash[nums[i]] >= 0) {
      return [hash[nums[i]], i]
    }
    hash[_target] = i
  }
}
//Space complexity: O(n) //extra space is required as # of items are stored in hash table