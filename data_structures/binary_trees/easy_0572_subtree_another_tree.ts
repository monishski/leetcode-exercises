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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) return true; //null is always a subtree of tree
  if (!root) return false
  if (isIdentical(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  // return isIdentical(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

const isIdentical = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== q.val) return false
  return isIdentical(p.left, q.left) && isIdentical(p.right, q.right)
}
