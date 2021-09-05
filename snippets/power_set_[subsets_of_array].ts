// A power set is a set of all subsets of S. It willl contain 2^n elements
// https://www.geeksforgeeks.org/power-set/

console.clear()

const powerSetIterative = (arr: number[]): number[][] => {
  const output: number[][] = []
  // 1 << arr.length === 2 ** arr.length = # of subsets
  for (let i = 0; i < (1 << arr.length); i++) { 
    const subset: number[] = []
    for (let j = 0; j < arr.length; j++) {
      if ((i & (1 << j)) > 0) {
        subset.push(arr[j])
      } 
    }
    output.push(subset)
  }
  return output
}

console.log(powerSetIterative([3,4,5,6,7,8]))

// [3, 4, 5] => You have 8 subsets

// i  bit, j=0 1<<j (i&1<<j), j=1 1<<j (i&1<<j), j=2 1<<j (i&1<<j), subset
// 0  000, 1 (0)            , 2 (0)             , 4 (0)           , []
// 1  001, 1 (1)            , 2 (0)             , 4 (0)           , [3]
// 2  010, 1 (0)            , 2 (1)             , 4 (0)           , [4]
// 3  011, 1 (1)            , 2 (1)             , 4 (0)           , [3, 4]
// 4  100, 1 (0)            , 2 (0)             , 4 (1)           , [5]
// 5  101, 1 (1)            , 2 (0)             , 4 (1)           , [3, 5]
// 6  110, 1 (0)            , 2 (1)             , 4 (1)           , [4, 5]
// 7  111, 1 (1)            , 2 (1)             , 4 (1)           , [3, 4, 5]

//Note there is a recursive method to do it as well
//It is also what is explained here (Java): https://www.geeksforgeeks.org/backtracking-to-find-all-subsets/
const powerSetRecursive = (arr: number[]): number[][] => {
  return backtrack(arr, 0, [], [])
}

const backtrack = (arr: number[], index: number, subset: number[], output: number[][]): number[][] => {
  if (index === arr.length) {
    output.push(subset)
  }
  backtrack(arr, index + 1, subset, output);
  subset.push(arr[index]);
  backtrack(arr, index + 1, subset, output);
  return output;
}

console.log(powerSetIterative([3,4,5,6,7,8]))

// Note there is an alternative implementation of the recursive solution which I could not make it work