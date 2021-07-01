/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
*/
var twoSum = function(numbers, target) { //My solution is based out of one of solutions in the dicussions
  //Hash/Maps dont quite work because of [3, 5, 5, 7] with target of 10 or [0, 0, 2, 3] with target of 0
  //Instead use two-pointers
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    let sum = numbers[i] + numbers[j]  
    if (sum === target) {
      return [i+1, j+1]
    } else if (sum > target) {
      j--
    } else { //this is compulsary, you cant just have i++
      i++
    }
  }
};