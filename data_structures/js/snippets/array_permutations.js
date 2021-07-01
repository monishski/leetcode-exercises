//https://leetcode.com/problems/array-partition-i/solution/
const arr = []
const permutate = (nums, currIndex) => {
  if (currIndex === nums.length - 1) {
    // console.log(nums)
    arr.push([...nums])
  }
  
  for(let i=currIndex; i<nums.length; i++) {
    swap(nums, i, currIndex)
    permutate(nums, currIndex+1)
    swap(nums, i, currIndex) //I haven't yet grasped this last swap!
  }
}

const swap = (nums, i, j) => { 
  [nums[j], nums[i]] = [nums[i], nums[j]] 
}

permutate(['a', 'b', 'c'], 0)
console.log(arr)

//Note time complexity of this is O(n!)... a total of n! permutations are possible for n elements arr
//Space complexity is O(n), we do not allocate any additional DS but use O(N) for the recursion stack