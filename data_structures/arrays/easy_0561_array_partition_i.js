/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b)
  //basically what you trying to do is minimize the different between 2 adjancet values (or pair)
  let sum = 0
  for(let i=0; i<nums.length; i+=2) {
    sum += Math.min(nums[i], nums[i+1])
  }
  return sum
};
//Time complexity is O(nlogn) because sorting takes that long
//Space complexity is O(N) or O(logN) (this will depend on the algorith for sorting used by the programming language)

//Although I saw the trick, it might be worth keeping hold of the algorithm for generating all permutations of an array...

//See saved snippets code
