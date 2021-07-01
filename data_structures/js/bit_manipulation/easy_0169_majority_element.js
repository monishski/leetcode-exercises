/**
* @param {number[]} nums
* @return {number}
*/
const __majorityElement = nums => {
  const hash = {}
  for(let i=0; i<nums.length; i++) {
      hash[nums[i]] = !hash[nums[i]] ? 1 : hash[nums[i]]+1
  }
  //Note you might not need to iterate again below
  //You could stop the loop above as soon as hahs[nums[i]] > 0
  for (const key in hash) {
      if (hash[key] > nums.length/2) {
          return parseInt(key)
      }
  }
  // return parseInt(Object.keys(hash).find(key => hash[key] > nums.length/2))
};
// Time complexity: O(n)
// Space complexity: O(n), specifically the Hash contains n - n/2 associations at maximuml
// The majority element will occupy at minimum n/2 + 1, thereforce n - (n/2 + 1) can be occupied by distinct, non-majority elements

const _majorityElement = nums => {
  nums.sort()
  return nums[parseInt(nums.length/2)]
}
// Time complexity: O(nlogn)
// Space complextity: O(1) or O(n), O(1) if sorted in place, O(n) if we have to store another copy

// Based on Boyer-Moore algorithm
const majorityElement = nums => {
  let count = 0
  let majority = 0
  for(let i=0; i<nums.length; i++) {
    if (count === 0) {
      majority = nums[i]
    }
    count += nums[i] === majority ? 1 : -1 
  }
  return majority
}
//Time complexity: O(n)
//Space complexity: O(1)