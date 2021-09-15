class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function __removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head
  //We want to keep a distance of 2 nodes 
  let dummy = new ListNode()
  dummy.next = head
  
  let left = dummy
  let right = dummy.next.next

  let dist = 1
  while (right) {
    right = right.next
    dist++
    while (dist > n) {
      left = left.next
      dist--
    }
  }
  left.next = left.next.next
  return dummy.next;
};

//The above works but there is more succint way of writing the while loop
function _removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head
  let dummy = new ListNode()
  dummy.next = head
  
  let left = dummy
  let right = dummy.next
  while (n > 0 && right) { //keep shift the right node until the distance between the 2 nodes is n
    right = right.next
    n--
  }
  
  while (right) { //shift both left and right
    right = right.next
    left = left.next
  }
  left.next = left.next.next
  return dummy.next
}

//Even cleaner
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head, slow = head
  for (let i = 0; i < n; i++) fast = fast.next
  if (!fast) return head.next
  while (fast.next) fast = fast.next, slow = slow.next
  slow.next = slow.next.next
  return head
};