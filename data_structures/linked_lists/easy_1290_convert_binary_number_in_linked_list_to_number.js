var __getDecimalValue = function(head) {
  let binaryString = '';
  while (head) {
    binaryString += head.val+''
    head = head.next
  }
  return parseInt(binaryString, 2)
};

const _getDecimalValue = head => {
  let result = head.val
  while (head.next) {
    result = result * 2 + head.next.val
    head = head.next
  }
  return result
}

const getDecimalValue = head => {
  let result = head.val
  while (head.next) {
    result = (result << 1) | head.next.val
    head = head.next
  }
  return result
}