/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/

//The simplest method is to count the numbers of 0's first,
//Create a new empty array and loop through the array and add where it is not 0
//Then push ino this new array for the count of zeros //this is suboptimal

var _moveZeroes = function(nums) { //Solution 1 (implemented after understading)
  let nonZeroIndex = 0
  for(let i=0; i<nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex++] = nums[i]
    }
  }
  for(let j=nonZeroIndex; j<nums.length; j++) {
    nums[j] = 0
  }
};
//Time complexity is O(n) => operations is still sub-optimal, total operations is n
//Space complexity is O(1)

const moveZeroes = nums => {
  // Basically, this is a slight variation of the above
  // The key point is that:
  // IF THE CURRENT ELEMENT IS NON-0, ITS CORRECT POSITION CAN BE ITS CURRENT POSITION OR A POSITION EARLIER
  // i.e. IT WILL EVENTUALLY BE OCCUPIED BY A NON-ZERO OR 0
  let nonZeroIndex = 0
  for(let i=0; i<nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[nonZeroIndex]
      nums[nonZeroIndex] = nums[i]
      nums[i] = temp
      nonZeroIndex++
    }
  }
}
//Note that there is a discussion under solution about wether solution 3 is better than solution 3
//e.g. [0, 1, 1, 1, 1] would require 2*n operations in solution 3 while solution 2 would do it in n operations
//Also solution 2 can be optimised by a memset + in solution 3 a swap operation is not a 1 step process