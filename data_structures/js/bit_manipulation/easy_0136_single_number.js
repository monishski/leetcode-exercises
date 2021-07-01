/**
 * @param {number[]} nums
 * @return {number}
*/
const singleNumber = nums => {
  let result = 0
  for(let i=0; i<nums.length; i++) {
      result = result ^ nums[i]
  }
  return result
}
// Time complexity is O(n)
// Space complexity is O(1)