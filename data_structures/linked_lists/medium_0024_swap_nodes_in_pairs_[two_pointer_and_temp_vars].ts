class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// https://www.youtube.com/watch?v=jiLloHVmLDc&ab_channel=VivekanandKhyade-AlgorithmEveryDay
// I spent too long trying it do it with 2 pointers, and could not properly interate to the next pair
function _swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let dummy = head.next
  let p = head //iterator
  while (true) {
    let q = p.next
    let temp = q.next 
    q.next = p
    if (!temp) {
      p.next = null;
      break;
    } else if (!temp.next) {
      p.next = temp
      break;
    }
    p.next = temp.next
    p = temp
  }
  return dummy
};

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let dummy = head.next
  let prev: ListNode | null = new ListNode();
  let curr = head
  while (curr && curr.next) {
    let q = curr.next
    let temp = q.next
    
    q.next = curr
    curr.next = temp
    prev.next = q
    
    prev = curr
    curr = temp
  }
  return dummy
};





