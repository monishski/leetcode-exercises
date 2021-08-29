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

function _searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return;
  let node = root
  while (node) {
    if (val === node.val) return node;
    else if (val < node.val) node = node.left;
    else node = node.right;
  }
  return node
};

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return root;
  if (root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val)
  if (val > root.val) return searchBST(root.right, val)
}