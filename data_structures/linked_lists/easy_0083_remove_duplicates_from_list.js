var deleteDuplicates = function(head) {
  let currNode = head
  while (currNode) {
    while (currNode.next && currNode.val === currNode.next.val) {
      currNode.next = currNode.next.next
    } 
    currNode = currNode.next
  }
  //Basically all of the above could be written as 
  // while (currNode && currNode.next) {
  //   if (currNode.val === currNode.next.val) {
  //     currNode.next = currNode.next.next
  //   } else {
  //     currNode = currNode.next
  //   }
  // }
  return head
};
//Time complexity is O(n) - each node in the list is checked exactly once to determine if it is a duplicate
//Space: O(1)