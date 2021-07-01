var _removeElements = function(head, val) {
  if (!head) return head;  
  while (head && head.val === val) { //reset head to a node where node.val !== val
    head = head.next
  }
  
  // let currNode = head, prevNode;
  // while (currNode && currNode.next) {
  //   prevNode = currNode;
  //   currNode = currNode.next
  //   while (currNode && currNode.val === val) {
  //     currNode = currNode.next
  //   }
  //   prevNode.next = currNode
  // }
  
  //You dont need a prevNode pointer...
  let currNode = head
  while (currNode && currNode.next) {
    if (currNode.next.val === val) { 
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }
  
  return head
};

const removeElements = (head, val) => {
  let currNode = head, prevNode;
  while (currNode) {
    if (currNode.val === val) {
      if (prevNode) {
        prevNode.next = currNode.next
      } else { //the only reason you would not have a prevNode is because you are at the head!
        head = currNode.next
      }
    } else {
      prevNode = currNode
    }
    currNode = currNode.next
  }
  return head
}