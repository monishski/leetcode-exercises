/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {number}
 */

 var getLength = head => {
  let currNode = head
  let length = 0;
  while (currNode) {
    currNode = currNode.next
    length++
  }
  return length 
}

var _getDecimalValue = function(head) {
  let currNode = head
  let power = getLength(head) - 1
  let result = 0
  while (currNode) {
    result += (currNode.val * 2**power)
    currNode = currNode.next
    power--
  }
  return result    
};

const getDecimalValue = head => {
  let result = 0
  while (head) { //you just need to multiply by 2!
    result = ((result << 1) | head.val) // num = num * 2 + x
    head = head.next
  }
  return result
}
//Time complexity: O(N)
//Space complexity: O(1)