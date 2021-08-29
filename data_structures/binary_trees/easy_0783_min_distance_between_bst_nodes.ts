class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function minDiffInBST(root: TreeNode | null): number { //Same as q#530
  let min = Number.POSITIVE_INFINITY
  let prevNode: TreeNode | null = null
    
  const traverse = (node: TreeNode): void => {
    if (!node) return null;
    if (node.left) traverse(node.left);
    min = Math.min(min, node.val - (prevNode ? prevNode.val : Number.NEGATIVE_INFINITY))
    prevNode = node
    if (node.right) traverse(node.right); 
  }
  traverse(root)

  return min
};