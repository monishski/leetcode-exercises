/**
 * @param {number} numRows
 * @return {number[][]}
 */
var _generate = function(numRows) {
  const pascal = [[1]]
  let row = 2
  while (row <= numRows) {
    let temp = []
    for(let col=0; col<row; col++) {
      if (col === 0 || col == (row-1)) {
        temp.push(1)
      } else {
        temp.push(pascal[row-2][col-1] + pascal[row-2][col])
      }
    }
    pascal.push(temp)
    row++
  }
  return pascal
};

const generate = numRows => {
  const pascal = []
  for(let row=0; row<numRows; row++) {
    let temp = new Array(row+1).fill(1)
    for(let col=1; col<row; col++) {
      temp[col] = pascal[row-1][col-1] + pascal[row-1][col]
    } 
    pascal.push(temp)
  }
  return pascal
}
//Time complexity: O(n^2) => The outer looks run numRows times, but for each iteration of the outer loop, the inner loop runs 'row' times.
//There the overall number of triangle updates that occur is 1 + 2 + 3 + .. + numRows = n(n+1)/2 => O(n^2)
//The space complexity is O(n^2)