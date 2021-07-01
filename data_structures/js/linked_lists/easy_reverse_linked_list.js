var _reverseList = function(head) {
  if (!head) return null;
  let currNode = head, prevNode = null;
  //let [currNode, prevNode] = [head, null]
  while (currNode) {
    let temp = currNode.next
    currNode.next = prevNode  
    prevNode = currNode
    currNode = temp
    //[currNode.next, prevNode, currNode] = [prevNode, curreNode, currNode.next]
  }
  return prevNode
};
//Space Complexity is O(1)

//You can also solve this recursively but Space Complexity is O(n)... the extra space comes from the implicit stakc space due to recursion
const reverseList = head => { //see https://youtu.be/MRe3UsRadKw
  if (!head || !head.next) return head;
  let p = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p
}