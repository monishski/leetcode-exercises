var _mergeTwoLists = function(p, q) { 
  if (!p) return q;
  if (!q) return p;
  if (p.val > q.val) { //make l1 always to have the smaller value
    [p, q] = [q, p];
  }
  let head = p
  while (q) {
    while (p.next && p.next.val <= q.val) {
      p = p.next
    }    
    
    temp = p.next
    p.next = q
    q = temp
  
  }
  return head  
};

//There is another great solution in the discussions
const mergeTwoLists = (p, q) => {
  let _head = { next: null }; //create a head
  let head = _head
  while (p && q) {
    if (p.val < q.val) {
      head.next = p
      p = p.next
    } else {
      head.next = q
      q = q.next
    }
    head = head.next
  }
  head.next = p || q
  return _head.next
}

//See Hackerrank solution for recursive solution