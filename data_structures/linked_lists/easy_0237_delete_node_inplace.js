var deleteNode = function(node) { //node is not the head of the list but the node to be deleted
  node.val = node.next.val
  node.next = node.next.next
};