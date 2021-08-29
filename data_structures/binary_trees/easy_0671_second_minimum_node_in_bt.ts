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

function findSecondMinimumValue(root: TreeNode | null): number {
  
  let minFirst = Number.POSITIVE_INFINITY
  let minSecond = Number.POSITIVE_INFINITY
  
  const traverse = (node: TreeNode | null) => {
    if (!node) return;

    if (node.val < minFirst) {
      minSecond = minFirst
      minFirst = node.val
    } else if (node.val < minSecond && node.val !== minFirst) {
      minSecond = node.val
    }
    
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }
  traverse(root)

  return minSecond === Number.POSITIVE_INFINITY ? -1 : minSecond

};