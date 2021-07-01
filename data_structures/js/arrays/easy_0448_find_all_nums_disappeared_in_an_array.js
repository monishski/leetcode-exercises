/**
 * @param {number[]} nums
 * @return {number[]}
*/
var __findDisappearedNumbers = function(nums) {
  let arr = []
  for(let i=1; i<nums.length+1; i++) {
    let counter = 0
    for(let j=0; j<nums.length; j++) {
      if (i === nums[j]) counter++;
    }
    if (counter === 0) arr.push(i)
  }
  return arr
};

//This is my adaption of the solutions I saw
const _findDisappearedNumbers = nums => {
  const arr = new Array(nums.length).fill(false)
  for(let i=0; i<nums.length; i++) {
    index = Math.abs(nums[i]) - 1
    arr[index] = true
  }
  return arr.reduce((arr, val, index) => !val ? arr.concat(index+1) : arr, [])
}

const findDisappearedNumbers = nums => {
  let result = []
  for(let i=0; i<nums.length; i++) { //this basically makes use of existing array?
    index = Math.abs(nums[i]) - 1
    nums[index] = -1 * Math.abs(nums[index]) //could have if statement here;nums[index] > 0
  }
  // console.log(nums)
  for(let j=0; j<nums.length; j++) {
    if (nums[j] > 0) result.push(j+1)
  }
  return result
}