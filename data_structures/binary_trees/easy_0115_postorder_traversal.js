var _postorderTraversal = function(root) {
  if (!root) return []
  let result = []
  return helper(root, result)
};

const helper = (node, result) => {
  if (node) {
    helper(node.left, result)
    helper(node.right, result)
    result.push(node.val)
  }
  return result
}

const postorderTraversal = root => {
  if (!root) return []
  let result = []
  let stack = []
  let node = root
  let prevNode = null;
  while (stack.length || node) {
    if (node) {
      stack.push(node)
      node = node.left
    } else { //no more left nodes, make right node the curr node
      let peek = stack[stack.length-1]
      if (peek.right && prevNode !== peek.right) {
        node = peek.right
      } else { //if the right child does not exists 
        result.push(peek.val)
        prevNode = stack.pop()        
      }
    }
  }
  return result
}