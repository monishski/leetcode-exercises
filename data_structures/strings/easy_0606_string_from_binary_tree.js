/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var __tree2str = function(root) {
  return root.val.toString() + preorder_traversal(root, '')
};

const preorder_traversal = (node, result)  => {
  if (node) {
    if (node.left) {
      result +=  '(' + node.left.val.toString() + preorder_traversal(node.left, result) + ')'
    }
    if (node.right) {
      let prefix = !node.left ? '()' : '' 
      result += prefix + '(' + node.right.val.toString() + preorder_traversal(node.right, '') + ')'
    }  
    return node.left || node.right ? result : ''
  }
  return ''
}
//Time complexity is O(n): the preorder traversal is done over the n nodes of the given binary tree
//Sapce complexity is O(n): the depth of the recursion tree can go up to n in a case of a skewed tree

//Rewritten
const _tree2str = node => {
  if (!node) return ""
  if (!node.left && !node.right) return node.val+''
  if (!node.right) return node.val+'('+tree2str(node.left)+")"
  return node.val+'('+tree2str(node.left)+')('+tree2str(node.right)+')'
}

var tree2str = function(t) {
  if (!t) return '';
  const left = tree2str(t.left);
  const right = tree2str(t.right);
  return t.val + (left || right ? `(${left})` : '') + (right ? `(${right})` : '');
};