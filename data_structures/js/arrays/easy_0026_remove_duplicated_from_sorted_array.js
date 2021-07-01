/**
 * @param {number[]} nums
 * @return {number}
*/
var _removeDuplicates = function(nums) {
  for(let i=0; i<nums.length; i++) {
    while (nums[i] === nums[i+1]) {
      nums.splice(i, 1)
    }  
  }  
  return nums.length
};

//There is specific algorithm for this AKA two-pointer
//The idea is that you have a slow moving and a fast moving index
const removeDuplicates = nums => {
  let i = 0;
  for(let j=1; j<nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j] //Note we actually not delete elements, instead we are overwriting values
    }
  }
  return ++i //we return the length of the new array, not the array itself...
}