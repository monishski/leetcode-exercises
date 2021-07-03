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

function findTilt(root: TreeNode | null): number {
  let tilt = 0
  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;
    let leftSum = dfs(node.left)
    let rightSum = dfs(node.right)
    tilt += Math.abs(leftSum - rightSum)
    return node.val + leftSum + rightSum
  }
  dfs(root)  
  return tilt
};
//Time complexity is O(N) since we traverse each node once and only once, during the traversal we caclulate the tilt value for each node
//Space complexity is O(N) - the recursive nature of the solution incurs additional memory consumption in function call stck