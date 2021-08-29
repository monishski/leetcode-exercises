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

function _mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1 && !root2) return null;
  if (!root1 || !root2) return root1 || root2;

  let root = new TreeNode(root1.val + root2.val)
  root.left = _mergeTrees(root1.left, root2.left)
  root.right = _mergeTrees(root1.right, root2.right)
  
  // You could add directly to root1
  // root1.val += root2.val
  // root1.left = _mergeTrees(root1.left, root2.left)
  // root1.right = _mergeTrees(root1.right, root2.right)

  return root
};
//Space complexity is O(m) where m is the number of overlapping nodes between the 2 tress (e.g. tree1 extends to the left 100 times and tree2 extends to the right 100 times)

//The iterative approach fairly logical... You use a stack with the pair of nodes
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1 && !root2) return null;
  if (!root1 || !root2) return root1 || root2 
  let stack: TreeNode[][] = [[root1, root2]]

  while (stack.length) { // stack.length > 0
    let [node1, node2] = stack.pop()
    if (node1 && node2) {
      stack.push([node1.left, node2.left])
      stack.push([node1.right, node2.right])
      node1.val += node2.val

      if (!node1.left) {
        node1.left = node2.left
      } 
      if (!node1.right) {
        node1.right = node2.right
      }      
    }
  }

  return root1
}
//Time complexity: O(n) -> n refers to the smaller of the number of nodes in the 2 trees
//Space complexity: O(n) -> the depth of the stack can grow up to n in the skewed case