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

function _findTarget(root: TreeNode | null, k: number): boolean {
  if (!root) return false;

  let map = new Map<number, number>()
  let result = false

  const traverse = (node: TreeNode | null): void => {
    if (!node) return;
    let target = k - node.val
    if (map.has(target)) { //not using just a object fails for when map[target] is 0
      result = true
    }
    map.set(node.val, target)
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }
  traverse(root)

  return result
};

//You can write the above a little more neatly using sets and a helper function
function findTarget(root: TreeNode | null, k: number): boolean {
  let set = new Set<number>()
  return helper(root, k, set)
}

const helper = (node: TreeNode | null, k: number, set: Set<number>): boolean => {
  if (!node) return false;
  if (set.has(k - node.val)) return true;
  set.add(node.val)
  return helper(node.left, k, set) || helper(node.right, k, set)
}
//Time complexity: since we traverse the entire tree in the worst case: O(n)
//Space complexity: the size of the set can grow up to n in the worst case

//As last resort, you could also use inorder traversal to get an array and then use the two pointer method to find if the sum exists