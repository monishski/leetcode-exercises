//This does not filter for duplicates and its O(n^3) in time complexity as it finds every possible combo
function _threeSum(nums: number[]): number[][] { 
  if (nums.length === 0) return []
  let res: number[][] = []
  let _nums = nums.sort((a, b) => a - b);
  
  let i = 0
  let j = i + 1
  let k = j + 1
  while (i < nums.length - 2) {
    while (j < nums.length - 1) {
      while (k < nums.length) {
        if (_nums[i] + _nums[j] + _nums[k] === 0) {
          res.push([_nums[i], _nums[j], _nums[k]])
        }  
        k++
      }
      j++;
      k = j + 1
    }
    i++
    j = i + 1
    k = j + 1
  }  
  
  return res
};

//https://www.youtube.com/watch?v=jzZsG8n2R9A&ab_channel=NeetCode
//The video above is very clear, the idea is that you sort the array, skip repeating value to next index
function threeSum(nums: number[]): number[][] {
  if (nums.length === 0) return []
  let res: number[][] = []
  let _nums = nums.sort((a, b) => a - b);
  
  let i = 0;
  while (i < _nums.length) {
    while (i > 0 && _nums[i] === _nums[i - 1]) i++; //skip index 
    //Use two pointer for the 2 remaining degrees of freedom (see two_sum and two_sum_ii problems)
    let j = i + 1
    let k = _nums.length - 1
    while (j < k) {
      let sum = _nums[i] + _nums[j] + _nums[k]
      if (sum > 0) k--
      else if (sum < 0) j++
      else {
        res.push([_nums[i], _nums[j], _nums[k]])
        // the video gives the example of [-2, -2, 0, 0, 2, 2] as a edge case
        // [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] => [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
        j++;
        while (_nums[j] === _nums[j - 1]) j++ //skip index 
        k-- //you actually dont need this because the if statements will take case of it
        while (_nums[k] === _nums[k + 1]) k-- //skipindex
      }
    }
    i++
  }
  return res
}