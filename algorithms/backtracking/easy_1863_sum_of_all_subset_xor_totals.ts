function _subsetXORSum(nums: number[]): number {
  let totalSum = 0;
  for (let i = 0; i < 1 << nums.length; i++) {
    let subsetSum = 0
    for (let j = 0; j < nums.length; j++) {
      if ((i & (1 << j)) > 0) {
        subsetSum ^= nums[j]
      }      
    }
    totalSum += subsetSum
  }
  return totalSum
};

//The above is the iterative method, but you can also do it recursively (below is adapted from solutions)
const subsetXORSum = (arr: number[]): number => {
  return backtrack(arr, 0, [], 0);
}

const backtrack = (arr: number[], index: number, subset: number[], totalSum: number): number => {
  totalSum += subset.reduce((a, b) => a ^ b, 0)
  for (let i = index; i < arr.length; i++) {
    subset.push(arr[i]);
    totalSum = backtrack(arr, i+1, subset, totalSum);
    subset.pop();
  }
  return totalSum;
}