//Scanning a 2d array using a 3x3 grid
//Here we smooth each value by the surrounding values, the difficult is with edge cases

const smooth2Darray = arr => {
  const r = arr.length, c = arr[0].length
  const newArr = [...new Array(r)].map(e => new Array(c).fill(0))

  for(let row = 0; row < r; row++) {
    for(let col = 0; col < c; col++) {
      count = 0 //count number of values
      for(let _row = row-1; _row <= row + 1; _row++) {
        for(let _col = col-1; _col <= col + 1; _col++) {
          if (_row >= 0 && _row < r && _col >= 0 && _col < c) {
            newArr[row][col] += arr[_row][_col]
            count++
          }
        }
      }
      newArr[row][col] = Math.floor(newArr[row][col] / count)
    }
  }
  console.log(newArr)
  return newArr
}

smooth2Darray([[100,200,100],[200,50,200],[100,200,100]])