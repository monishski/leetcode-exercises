var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let p = headA
  while (p) {
    q = headB
    while (q) {
      if (p === q) return p;
      q = q.next
    }
    p = p.next
  }
  return null
};
//The above solution is O(n) is space complexity but you can solve it in O(1) space

//The trick is to make 2 LL of equal length but concatenate the end of A to B and B to A
//https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/1092898/JS-Python-Java-C%2B%2B-or-Easy-O(1)-Extra-Space-Solution-w-Visual-Explanation
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let p = headA, q = headB
  while (p !== q) {
    p = !p ? headB : p.next
    q = !q ? headA : q.next
  }
  return p; //this will be null if they dont intersect anyways
}
//Great solution