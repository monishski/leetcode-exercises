var _isPalindrome = function(head) {
  let p = head, q = head, head2 = null;
  while (p && p.next) { //split the LL into 2
    p = p.next.next
    if (!p) {
      head2 = q.next;
      break;
    }; //list is even
    if (!p.next) { 
      head2 = q.next.next;
      break;
    } //list is odd (we ignore the middle done in odd case) 
    q = q.next
  }
  q.next = null
  
  head2 = reverseLinkedList(head2)
  
  while (head2) {
    if (head.val !== head2.val) return false;
    head2 = head2.next
    head = head.next
  }
  return true
};

const reverseLinkedList = (head) => {
  if (!head) return head;
  let currNode = head, prevNode = null;
  while (currNode) {
    let temp = currNode.next
    currNode.next = prevNode  
    prevNode = currNode
    currNode = temp
  }
  return prevNode
}

//The above is fine, but I think it uses additional space by creating head2
// https://leetcode.com/problems/palindrome-linked-list/discuss/1137027/JS-Python-Java-C%2B%2B-or-Easy-Floyd's-%2B-Reversal-Solution-w-Explanation
const isPalindrome = head => {
  let slow = head, fast = head, prev, temp //prev and temp are later for reversing
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  
  prev = slow //this is the confusing bit...
  slow = slow.next
  prev.next = null //disconnect
  while (slow) { //reverse the LL
    temp = slow.next
    slow.next = prev
    prev = slow
    slow = temp
  }
  slow = prev
  // You could simplify the above with
  // slow = reverseLinkedList(slow);
  
  while (slow) {
    if (head.val != slow.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true;
}
