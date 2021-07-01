/**
 * @param {number[][]} img
 * @return {number[][]}
*/
var _imageSmoother = function(img) {
  
  const r = img.length, c = img[0].length
  
  for(let row = 0; row < r; row++) {
    img[row].push(-1)
    img[row].unshift(-1)
  }
  img.push(new Array(c).fill(-1))
  img.unshift(new Array(c).fill(-1))
  
  const newImg = [...Array(r)].map(_ => Array(c));

  for(let row = 1; row <= r; row++) {
    for(let col = 1; col <= c; col++) {
      newImg[row-1][col-1] = Math.floor(neighbourScan(img, row, col))
    }
  }s
  return newImg
};

const neighbourScan = (img, row, col) => {
  const arr = [img[row-1][col-1], img[row-1][col], img[row-1][col+1],
            img[row][col-1], img[row][col], img[row][col+1], 
            img[row+1][col-1], img[row+1][col], img[row+1][col+1]]
  
  let count = arr.reduce((acc, val) => val >= 0 ? acc+1 : acc, 0)
  let sum = arr.reduce((acc, val) => val >= 0 ? acc+val : acc, 0)
  return sum / count
}

//The solution above works but lacks clarity! You can do everything at once
const imageSmoother = img => {
  const r = img.length, c = img[0].length
  const newImg = [...Array(r)].map(_ => Array(c).fill(0));
  
  for(let row = 0; row < r; row++) {
    for(let col = 0; col < c; col++) {
      let count = 0
      for(let _row = row-1; _row <= row + 1; _row++) {
        for(let _col = col-1; _col <= col + 1; _col++) {
          if (_row >= 0 && _row < r && _col >= 0 && _col < c) {
            newImg[row][col] += img[_row][_col]
            count++
          }
        }
      }
      newImg[row][col] = Math.floor(newImg[row][col] / count)
    }
  }
  return newImg
}
//Note the time complexity is O(N), where N is the number pixels in our image (O(nm?))
//Space complexity is O(N)