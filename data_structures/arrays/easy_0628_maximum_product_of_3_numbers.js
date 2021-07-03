/**
 * @param {number[]} nums
 * @return {number}
 */
 var __maximumProduct = function(nums) {
  let prod = Number.NEGATIVE_INFINITY
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      for(let k = j + 1; k < nums.length; k++) {
        let _prod =  nums[i] * nums[j] * nums[k]
        prod = Math.max(prod, _prod)
      }
    }  
  }
  return prod
};

//Solution (almost there)
//You need to note that it could also possible that the 2 negative numbers lying at the left extreme could also contribute to lead to a larger product if the 3rd number in the triple is considered the largest positive in nums array

const _maximumProduct = function(nums) {
  nums.sort((a, b) => a - b)
  let l = nums.length
  // return nums[l-1] * nums[l-2] * nums[l-3] //this doesn't work because of negatives
  return Math.max(nums[0] * nums[1] * nums[l-1], nums[l-1] * nums[l-2] * nums[l-3])
}

//Time complexity is O(nlogn)
//Space complety is O(1)

//There is an alternative solution which I note down here because it has to do with finding the 1st/2nd/3rd maximum/minmums
//i.e. return the larger of min1 x min2 x max1 or max1 x max2 x max3 
const maximumProduct = function(nums) {
  let max1 = Number.NEGATIVE_INFINITY, max2 = Number.NEGATIVE_INFINITY, max3 = Number.NEGATIVE_INFINITY
  let min1 = Number.POSITIVE_INFINITY, min2 = Number.POSITIVE_INFINITY
  for(let i = 0; i < nums.length; i++) {
    //Find minimums
    if (nums[i] < min1) {
      min2 = min1
      min1 = nums[i]
    } else if (nums[i] < min2) {
      min2 = nums[i]
    }
    //Find maximums
    if (nums[i] > max1) {
      max3 = max2
      max2 = max1
      max1 = nums[i]
    } else if (nums[i] > max2) {
      max3 = max2
      max2 = nums[i]
    } else if (nums[i] > max3) {
      max3 = nums[i]
    }
  } 
  return Math.max(min1 * min2 * max1, max1 * max2 * max3)
}