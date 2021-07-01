/**
* @param {number} num
* @return {string}
*/

store = { // I guess you could have used an array here
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "a",
  11: "b",
  12: "c",
  13: "d",
  14: "e",
  15: "f"
}

var toHex = function(num) {
  if (!num) {
    return "0"
  }
  let string = ""
  while (num) {
    lsn = num & 0x0f //last significant nibble
    string = store[lsn] + string
    num = num >>> 4
  } 
  return string
};