// Definition for a binary tree node.
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

function _sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0;
  const helper = (node: TreeNode | null): void => {
    if (!node) return;
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val
    }
    if (node.left) helper(node.left)
    if (node.right) helper(node.right)
  }
  helper(root)
  return sum
};

//Most solutions have gonne with the approach of tagging the left node with a boolean
function sumOfLeftLeaves(root: TreeNode | null, isLeft: boolean = false): number {
  if (!root) return 0;
  if (isLeft && !root.left && !root.right) return root.val;
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right)
}