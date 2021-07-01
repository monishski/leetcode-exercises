/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var __matrixReshape = function(mat, r, c) {
  const _mat = mat.flat(); //there are multiple methods to this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
  if (r * c !== _mat.length) {
    return mat;
  } 
  const result = []
  //const _mat = [...Array(r)].map(_ => Array(c));
  let counter = 0
  for(let row = 0; row < r; row++) {
    const temp = []
    for(let col = 0; col < c; col++) {
      temp.push(_mat[counter])
      counter++
      //You could avoid temp arrays altogher
      //_mat[counter/c][counter%c] = nums[i][j]
      //counter/c gives you the row number
      //counter%c gives you the col number
    } 
    result.push(temp)
  }
  return result
};

//My solution is very similar to that of a queue
var _matrixReshape = function(mat, r, c) {
  if (r * c !== mat.length * mat[0].length) {
    return mat
  }
  const queue = []
  for(let i = 0; i < mat.length; i++) {
    for(let j = 0; j < mat[0].length; j++) {
      queue.push(mat[i][j])
    }
  }
  const _mat = []
  for(let i = 0; i < r; i++) {
    let temp = []
    for(let j = 0; j < c; j++) {
      temp.push(queue.shift())
    }
    _mat.push(temp)
  }
  return _mat
}
//Time Complexity is O(mn), we traverse m x n elements twice
//Space Complexity is O(mn), the queue is formed will be of size m x n

//You can do this without a queue too

var matrixReshape = function(mat, r, c) {
  if (r * c !== mat.length * mat[0].length) {
    return mat
  }
  const _mat = [...Array(r)].map(_ => Array(c));
  let row = 0, col = 0;
  for(let i = 0; i < mat.length; i++) {
    for(let j = 0; j < mat[0].length; j++) {
      _mat[row][col] = mat[i][j]
      //keep incrementing col until we reach the end of the required columns indicated by c
      col++
      if (col == c) {
        row++ //update row index 
        col = 0 //reset col index
      }
    }
  }
  return _mat
}
//Both time and space complexity are O(mn)

