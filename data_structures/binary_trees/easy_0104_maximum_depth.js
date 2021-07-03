var maxDepth = function(root) {
  if (!root) return 0;
  return helper(root, 1)
};

let helper = (node, currHeight) => {
  if (!node) return 0;
  else {
    let leftHeight = currHeight
    let rightHeight = currHeight
    leftHeight = 1 + helper(node.left, leftHeight)
    rightHeight = 1 + helper(node.right, rightHeight)
    return Math.max(leftHeight, rightHeight)
  }
}