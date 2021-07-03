/**
 * @param {number} rowIndex
 * @return {number[]}
*/

// r=0, 1
// r=1, 1 1
// r=2, 1 2 1 
// r=3, 1 3 3 1

var _getRow = function(rowIndex) {
  let lastRow;
  for(let row=0; row<=rowIndex; row++) {
    const temp = new Array(row+1).fill(1)
    for(let col=1; col<row; col++) {
      temp[col] = lastRow[col-1] + lastRow[col] 
    }
    lastRow = temp
  }
  return lastRow
};
//I think this is O(n^2) in time complexity


//There is a O(n) space solution 
//https://www.youtube.com/watch?v=IWXZAvBIuyE&ab_channel=KnowledgeCenter
const getRow = rowIndex => {
  const pascal = new Array(rowIndex+1).fill(1)
  for(let row=2; row<=rowIndex; row++) {
    for(let col=row-1; col>=1; col--) {
      pascal[col] += pascal[col-1]
    }
  }
  return pascal
}