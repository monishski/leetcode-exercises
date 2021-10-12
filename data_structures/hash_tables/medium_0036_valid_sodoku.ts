function _isValidSudoku(board: string[][]): boolean {
  let nRows = 9;
  let nCols = 9;
  let grid = 3;

  for (let row = 0; row < nRows; row++) {
    for (let col = 0; col < nCols; col++) {
      let val = board[row][col];
      if (val !== ".") {
        for (let r = row + 1; r < nRows; r++) {
          if (val === board[r][col]) return false;
        }

        for (let c = col + 1; c < nCols; c++) {
          if (val === board[row][c]) return false;
        }
      }

      if (row % grid === 0 && col % grid === 0) {
        let set = new Set<number>();

        for (let r = row; r < row + 3; r++) {
          for (let c = col; c < col + 3; c++) {
            let val = board[r][c];
            if (val !== ".") {
              if (set.has(+board[r][c])) return false;
              else set.add(+board[r][c]);
            }
          }
        }
      }
    }
  }
  return true;
}

//You can write all of the above a little more neatly

function isValidSudoku(board: string[][]): boolean {
  let nRows = 9;
  let nCols = 9;

  for (let row = 0; row < nRows; row++) {
    let rowSet = new Set<number>();
    let colSet = new Set<number>();
    let gridSet = new Set<number>();

    for (let col = 0; col < nCols; col++) {
      let rowVal = board[row][col];
      let colVal = board[col][row];
      let gridVal =
        board[3 * Math.floor(row / 3) + Math.floor(col / 3)][
          3 * (row % 3) + (col % 3)
        ];

      if (rowVal !== ".") {
        if (rowSet.has(+rowVal)) return false;
        rowSet.add(+rowVal);
      }

      if (colVal !== ".") {
        if (colSet.has(+colVal)) return false;
        colSet.add(+colVal);
      }

      if (gridVal !== ".") {
        if (gridSet.has(+gridVal)) return false;
        gridSet.add(+gridVal);
      }
    }
  }
  return true;
}
