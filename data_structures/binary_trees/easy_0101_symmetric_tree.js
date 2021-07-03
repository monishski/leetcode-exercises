var _isSymmetric = function(root) {
  if (!root) return true;
  return helper(root, root)
  // return helper(root.left, root.right)
};

const helper = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val //two tree are a mirror reflection of each other if their two roots have the same value
    && helper(p.left, q.right) //the right subtree of each tree is a mirror reflect of the left subtree of the other tree
    && helper(p.right, q.left)
}
//The space complexity is proportional to the height of the tree

const isSymmetric = function(root) {
  let queue = [] //2 consecutive in the queue should be equal their subtree mirror of each other
  queue.unshift(root)
  queue.unshift(root)
  while (queue.length) {
    let p = queue.pop()
    let q = queue.pop()
    if (!p && !q) continue;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    queue.unshift(p.left)
    queue.unshift(q.right)
    queue.unshift(p.right)
    queue.unshift(q.left)
  }  
  return true
}
//space complexity is O(n), there is additional space required for the search queue... in the worst case, we have to insert n nodes in the queue

//You could also do level order traversal, store the arrays and check if the array is symmetric...