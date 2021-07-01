//I could not understand what the problem was asking...
//But basically, e.g. in example 1, where it is 4 on nums1, you have to go to find 4 in nums2, and see if there is any value greater than 4 and so on
//The solution is to create a hash map of the next greater number of all the numbers of nums2 since nums2 is a subset of nums1
//Note to find the next best value in a single array we use stack
var _nextGreaterElement = function(nums1, nums2) { 
  // https://www.youtube.com/watch?v=8BDKB2yuGyg&ab_channel=NickWhiteNickWhite
  let hash = {}
  let stack = []
  for (let i = 0; i < nums2.length; i++) { //in the case of 1,3,4,2.. 4 and 2 are left in the stack as we never find a number that is greater to its right
    // console.log(stack, nums2[i])
    while (stack.length !== 0 && nums2[i] > stack[stack.length-1]) {
      hash[stack.pop()] = nums2[i]
    }
    stack.push(nums2[i])
  }
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    if (hash[nums1[i]]) result.push(hash[nums1[i]]);
    else result.push(-1);
  }
  return result
};

//The more intuative solution uses .indexOf
const nextGreaterElement = (nums1, nums2) => {
  let result = new Array(nums1.length)
  for(let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]) + 1
    while (nums2[index] < nums1[i]) { 
      index++ 
    }
    if (index >= nums2.length) result[i] = -1
    else result[i] = nums2[index]
  }
  return result
}