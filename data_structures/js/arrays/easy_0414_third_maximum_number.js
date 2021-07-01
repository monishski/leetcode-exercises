/**
 * @param {number[]} nums
 * @return {number}
 */
var __thirdMax = function(nums) {
  nums.sort((a, b) => a - b)
  let currMax = nums[nums.length-1]
  let counter = 1
  for(let i=nums.length-2; i >= 0; i--) {
    if (nums[i] < currMax) {
      counter++
      currMax = nums[i]
    }
    if (counter === 3) return currMax
  }
  return nums[nums.length-1]
}
//This is O(nlogn) because of the sort?

//There are alternative solutions from the discussion which also make sense:
const _thirdMax = nums => { //this is slower than above why?
  
  let negInf = Number.NEGATIVE_INFINITY
  let first = negInf
  let second = negInf
  let third = negInf
  
  for(let i=0; i<nums.length; i++) {
    console.log(nums[i])
    console.log(first, second, third)
    if (nums[i] === first 
      || nums[i] === second 
      || nums[i] === third) continue;
    if (nums[i] > first) {
      third = second //this must come before second
      second = first //this must come before first
      first = nums[i]
      //You could write this as following 
      // [first, second, third] = [nums[i], first, second]
    } else if (nums[i] > second) {
      third = second
      second = nums[i]
      // [second, third] = [nums[i], second]
    } else if (nums[i] > third) {
      third = nums[i]
    }
  }
  return third === negInf ? first : third
}

//Note you could also use a sets
const thirdMax = nums => {
  if (nums.length < 3) {
    return Math.max(...nums)
  };
  
  const set = new Set(nums)
  if (set.size < 3) {
    return Math.max(...nums)
  };
  
  for(let i=0; i<2; i++) {
    set.delete(Math.max(...set))
  }
  return Math.max(...set)
}


