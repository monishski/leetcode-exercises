class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Neetcode to the conceptual rescue ;o: https://www.youtube.com/watch?v=q5a5OiGbT6Q&ab_channel=NeetCode
// Apply divide and conquer algorithm and merge the two LL (see problem 21)
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0]
  // I think you want to remove empty arrays from the list first
  // if (lists.length > 1) { //this was catching me out see: https://leetcode.com/problems/merge-k-sorted-lists/discuss/1198189/Merge-Sort-and-Min-Heap
  let n = lists.length
  let mid = Math.floor(n / 2)
  let left: Array<ListNode | null> = lists.slice(0, mid)
  let right: Array<ListNode | null> = lists.slice(mid)
  let leftHead: ListNode | null = mergeKLists(left) //remember this pattern here...
  let rightHead: ListNode | null = mergeKLists(right)
  let head: ListNode | null = mergeLinkedLists(leftHead, rightHead)
  // }
  return head
  // Note the solution does the Merging step iteratively, overwriting the LL in lists O(1) space complexity!
  // let interval = 1
  // while (interval < n) {
  //   for (let i = 0; n - interval; i += (interval * 2)) {
  //     lists[i] = mergeLinkedLists(lists[i], lists[i + interval])
  //   }
  //   interval *= 2
  // }
  // return lists[0]
};

function mergeLinkedLists(p: ListNode | null, q: ListNode | null): ListNode | null {
  let head = new ListNode()
  let dummy = head
  while (p && q) {
    if (p.val < q.val) {
      dummy.next = p
      p = p.next
    } else {
      dummy.next = q
      q = q.next
    }
    dummy = dummy.next //keep forgeting this arh!
  }
  dummy.next = p || q
  return head.next
}
 
//Time complexity is O(nlogk) where k is the number of LL
//We merge the 2 LL in O(n), the merge process occurs in log2k steps

//Space complexity is O(log2k) in the recursive solution