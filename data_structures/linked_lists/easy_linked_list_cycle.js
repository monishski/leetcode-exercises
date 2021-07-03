var ___hasCycle = function(head) {
  if (!head) return false;
  let nodes = []
  while (head) {
    nodes.push(head)
    head = head.next
    for (let i = 0; i < nodes.length; i++) {
      if (head === nodes[i]) {
        return true
      }
    }
  }
  return false
};

//Hash method
const __hasCycle = (head) => { //this is basically like the above but a more efficient way
  if (!head) return false;
  let nodes = new Set()
  while (head) {
    nodes.add(head)
    head = head.next
    if (nodes.has(head)) return true;
  }
  return false  
}

//Two pointer method
const _hasCycle = (head) => {
  let p = head, q = head //slow, fast
  while (q && q.next && q.next.next) {
    p = p.next
    q = q.next.next
    if (p === q) return true;
  }
  return false;
}

//Add a property
var hasCycle = function(head) {
  if(!head) return false;
  while (head) {
    head.visited = true;
    head = head.next;    
    if (head && head.visited) return true;
  }
  return false;
    
};