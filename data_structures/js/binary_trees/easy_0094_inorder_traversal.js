var _inorderTraversal = function(root) {
  if (!root) return []
  let stack = []
  let inorder = []
  let node = root
  while (stack.length || node) {    
    // if (node) {
    //   stack.push(node)
    //   node = node.left
    // } else {
    //   node = stack.pop()
    //   inorder.push(node.val)
    //   node = node.right 
    // }
    //alternatively this could be written as follow:
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    inorder.push(node.val)
    node = node.right
  }
  return inorder
};

//Recursively, you can solve this using a recursive function
const inorderTraversal = root => {
  let result = []
  helper(root, result)
  return result
}

const helper = (root, list) => {
  if (root) {
    if (root.left) helper(root.left, list)
    list.push(root.val)
    if (root.right) helper(root.right, list)
  }
}