var _preorderTraversal = function(root) {
  if (!root) return [];
  let result = []
  return helper(root, result)
};

const helper = (node, result) => {
  if (node) {
    result.push(node.val)
    helper(node.left, result)
    helper(node.right, result)
  }
  return result
}

const preorderTraversal = root => {
  if (!root) return [];
  let result = []
  let stack = [] //front of the stack is to the right so using push and pop
  stack.push(root)
  while (stack.length) {
    let node = stack.pop()
    result.push(node.val)
    if (node.right) stack.push(node.right) //right is pushed first so left is processed first
    if (node.left) stack.push(node.left)
  }
  return result
}