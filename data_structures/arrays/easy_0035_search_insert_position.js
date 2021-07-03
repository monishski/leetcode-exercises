/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
var __searchInsert = function(nums, target) {
  let index = 0;
  for(let i=0; i<nums.length; i++) {
    if (nums[i] === target) {
      return i
    } 
    if (target > nums[i] && target < nums[i+1]) {
      index = i + 1
    }
  }
  if (target > nums[nums.length-1]) {
    index = nums.length
  }
  return index
};

//The above can be written more cleanly as 
const _searchInsert = (nums, target) => {
  for(let i=0; i<nums.length; i++) {
    if (nums[i] === target || target < nums[i]) {
      return i
    }
  }
  return nums.length
}

//You can speed this up with binary search
const searchInsert = (nums, target) => {
  let end = nums.length - 1
  let start = 0
  
  while (start <= end) { //Instead of a while loop, you could do this recursively
    let mid = Math.floor((start + end)/2)
    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) { //i.e. it lies in the lower half
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  
  return start
}