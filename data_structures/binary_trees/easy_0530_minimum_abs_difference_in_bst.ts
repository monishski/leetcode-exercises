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

function getMinimumDifference(root: TreeNode | null): number {
  let min = Number.POSITIVE_INFINITY
  let prevNode = Number.POSITIVE_INFINITY
  // let nodes: number[] = []
  
  const helper = (node: TreeNode | null): void => { //note this is is inorder traversal so we dont so any sorts
    if (!node) return;
    if (node.left) helper(node.left);
    // nodes.push(node.val)
    min = Math.min(min, Math.abs(node.val - prevNode))
    prevNode = node.val
    if (node.right) helper(node.right);
  }
  
  helper(root)
  
  // for (let i = 0; i < nodes.length - 1; i++) {
  //   min = Math.min(min, Math.abs(nodes[i]-nodes[i+1]))
  // }

  return min
};