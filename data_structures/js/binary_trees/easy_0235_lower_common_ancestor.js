//Just FYI, this is binary SEARCH tree not binary tree (i.e. its ordered..)
var _lowestCommonAncestor = function(root, p, q) {
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  } 
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  return root
};
//Time complexity is O(N)
//Space complexity is O(N) because the maximum amount of space utilized by the recursion stack would be N since the height of a skewed BST could be N
//In a balanced BST, the time complexity may be O(logn) since we reduce nodes to check by half after each step

//You can also use iteration to this proble
const lowestCommonAncestor = (root, p, q) => {
  while (root) {
    if (p.val > root.val && q.val > root.val) {
      root = root.right
    } else if (p.val < root.val && q.val < root.val) {
      root = root.left
    } else {
      return root
    }
  }
  return null;
}
//Space complexity is O(1)
//Time complexity is O(N)?
