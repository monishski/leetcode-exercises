/**
 * @param {number[]} nums
 * @return {string[]}
*/
var _summaryRanges = function(nums) {
  let arr = [[nums[0]]]
  for(let i=0; i<nums.length; i++) {
    if (nums[i] + 1 !== nums[i+1]) {
      arr.push([nums[i+1]])
    } else {
      arr[arr.length-1].push(nums[i+1])
    }
  } //the last element here is undefined...?
  
  let result = []
  for(let j=0; j<arr.length-1; j++) {
    const subArr = arr[j]
    if (subArr.length === 1) {
      result.push(subArr[0].toString())
    } else {
      result.push(subArr[0]+"->"+subArr[subArr.length-1])
    }
  }
  return result
};

//The above is terrible
const summaryRanges = nums => {
  let arr = []
  let start = nums[0]
  for(let i=0; i<nums.length; i++) {
    if (nums[i] + 1 !== nums[i+1]) {
      start === nums[i] 
        ? arr.push(start + '')
        : arr.push(start + "->" + nums[i])
      start = nums[i+1]
    }
  }
  return arr
}
//You could do it with a while loop where you would actually increment i twice
//Define a temporary start value
//While the difference is 1 between the next and curr value, keep incrementing 1 and make sure i doesnt exceed the legth of the array
//When this is not true... apply the ternary extression 

