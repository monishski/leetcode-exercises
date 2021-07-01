var _isBalanced = function(root) {
  if (!root) return true;
  // console.log(root.val, height(root.left), height(root.right))
  return Math.abs(height(root.left) - height(root.right)) <= 1 
    && isBalanced(root.left)
    && isBalanced(root.right)
};

const _height = (node) => {
  if (!node) return 0;
  let leftHeight = height(node.left)
  let rightHeight = height(node.right)
  return 1 + Math.max(leftHeight, rightHeight)
}

//You can encrypt the max at a given node with something like INFINITY

const isBalanced = root => {
  return height(root) !== Number.POSITIVE_INFINITY 
}

const height = node => {
  if (!node) return 0;
  let left = 1 + height(node.left)
  let right = 1 + height(node.right)
  if (Math.abs(left - right) > 1) return Number.POSITIVE_INFINITY
  return Math.max(left, right);
}