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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxLength = Number.NEGATIVE_INFINITY

  // const traverse = (node: TreeNode | null): void => {
  //   if (!node) return;
  //   maxLength = Math.max(maxLength, binaryTreeLength(node))
  //   if (node.left) traverse(node.left)
  //   if (node.right) traverse(node.right)
  // } 
  // traverse(root)

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;
    let leftHeight = dfs(node.left)
    let rightHeight = dfs(node.right)
    maxLength = Math.max(maxLength, leftHeight + rightHeight)
    return 1 + Math.max(leftHeight, rightHeight)
  }  

  dfs(root)

  return maxLength
};

const binaryTreeLength = (node: TreeNode | null): number => {
  let nEdges = 0
  if (node.left) nEdges += binaryTreeHeight(node.left); //feels repetetive?
  if (node.right) nEdges += binaryTreeHeight(node.right);
  return nEdges   
}

const binaryTreeHeight = (node: TreeNode | null): number => {
  if (!node) return 0;
  let leftHeight = binaryTreeHeight(node.left)
  let rightHeight = binaryTreeHeight(node.right)
  return 1 + Math.max(leftHeight, rightHeight)
}