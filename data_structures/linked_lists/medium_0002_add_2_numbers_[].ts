class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  
  let remainder = false
  
  let l = new ListNode() //for iterative
  let root = l //for return
  
  while (l1 || l2) {
    
    // Append to the shorter list
    if (!l1.next && l2.next) {
      l1.next = new ListNode()
    } else if (l1.next && !l2.next) {
      l2.next = new ListNode()
    } 
    
    // Add the 2 values
    let sum = l1.val + l2.val + (remainder ? 1 : 0)
    if (sum >= 10) {
      remainder = true
      sum -= 10
    } else {
      remainder = false
    }
    
    // Annotate new node 
    l.val = sum  
    if (l1.next && l2.next) { // Only add new node if there are more 'next' l1, l2 nodes
      l.next = new ListNode()
      l = l.next  
    }
    
    // Append any remainders
    if (!l1.next && !l2.next && remainder) {
      l.next = new ListNode(1)
    } 
    
    l1 = l1.next
    l2 = l2.next
  }
  
  return root
};






