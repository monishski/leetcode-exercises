function __convert(s: string, numRows: number): string {
  if (s.length === 1 && numRows === 1) return s
  let diag: string[] = []
  let vert: string[] = []
  
  const diagLength = numRows - 2 < 0 ? 0 : numRows - 2
  let step = numRows + diagLength 
  
  for (let i = 0; i < s.length; i += step) {
    let _vert = s.substring(i, i + numRows)
    vert.push(_vert + ' '.repeat(numRows - _vert.length))
  }
  
  // A little complicated but maps the diagonal with the vertical rows
  for (let i = numRows; i < s.length; i += step) {
    let _diag = s.substring(i, i + diagLength)
    let __diag = ' ' + _diag + ' '.repeat(numRows - _diag.length - 1)
    diag.push(__diag.split('').reverse().join(''))
  }
  
  
  let arr: string[] = []
  for (let i = 0; i < vert.length; i++) {
    arr.push(vert[i])
    if (diag[i]) {
      arr.push(diag[i]);
    }
  }

  let res = ''
  for(let i = 0; i < numRows; i++) {
    let temp = ''
    for (let j = 0; j < arr.length; j++) {
      temp += arr[j][i] !== ' ' ? arr[j][i] : ''
    }
    res += temp
  }
  
  return res  
};

// Based on the solution and discussions:
function _convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length < numRows) return s;
  let rows: string[][] = []
  let row = 0
  let goingDown = false

  for (let i = 0; i < s.length; i++) {
    if (!rows[row]) rows[row] = []
    rows[row].push(s[i])
    // The direction changes only when we moved up to the topmost row or moved down to the bottom most row
    if (row === 0 || row === numRows - 1) goingDown = !goingDown
    goingDown ? row++ : row--
  }

  return rows.reduce((res: string, arr: string[]) => res + arr.join(''), '')

}
// O(n) where n === len(s)

// ABCDEF, 2 => ACEBDF
// Row 1 ->  A   C   E
// Row 2 ->    B   D   F

// ABCDEF, 3 => AEBDFC
// Row 1 ->  A       E
// Row 2 ->    B   D   F
// Row 3 ->      C

// ABCDEF, 4 => ABFCED
// Row 1 ->  A       E
// Row 2 ->    B   D   F
// Row 3 ->      C

// I also like the indexing approach which is what I was trying to get to initially but failed to

// row   0             => k * cycleLength
// row   numRows - 1   => k * cycleLength + numRows - 1
// row   i             => k * cycleLength + i  and  (k + 1) * cycleLength - i

function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length < numRows) return s;
  let cycleLength = numRows + (numRows - 2)
  let result = ''
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < s.length; j += cycleLength) {
      result += s[j + i]
      if (i !== 0 && i !== numRows - 1 && j + cycleLength - i < s.length) {
        result += s[j + cycleLength - i]
      }
    }
  
  }
  return result
}