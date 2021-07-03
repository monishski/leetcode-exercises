// https://www.youtube.com/watch?v=5qj18l76xy4&ab_channel=KnowledgeCenter
var _isSameTree = function(p, q) { //recursive solution
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  //return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
//space complexity is O(logN) in the best case of a completely balanced tree and O(N) in the worst case of a complexity unbalance tree

//The iterative approach uses a variation of BFS
const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!isEqual(p, q)) return false;
  
  let queueP = []
  queueP.unshift(p)
  let queueQ = []
  queueQ.unshift(q)
  while (queueP.length) {
    let nodeP = queueP.pop()
    let nodeQ = queueQ.pop()
    if (!isEqual(nodeP, nodeQ)) return false; //you have to check whether the children are the same 
    if (nodeP) {
      if (!isEqual(nodeP.left, nodeQ.left)) return false;
      if (nodeP.left) {
        queueP.unshift(nodeP.left)
        queueQ.unshift(nodeQ.left)
      }
      if (!isEqual(nodeP.right, nodeQ.right)) return false;
      if (nodeP.right) {
        queueP.unshift(nodeP.right)
        queueQ.unshift(nodeQ.right)
      }
    }
  }
  return true
}

const isEqual = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return true
}

