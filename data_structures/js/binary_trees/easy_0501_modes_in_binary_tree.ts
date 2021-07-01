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

function _findMode(root: TreeNode | null): number[] { //faster than 100% of other solutions?
  
  let nodes: { [key: number]: number } = {} //hash contains frequency of each node val
  
  const preorderTraversal = (node: TreeNode | null) => {
    if (!node) return;
    if (!nodes[node.val]) {
      nodes[node.val] = 0
    } 
    nodes[node.val] += 1
    if (node.left) preorderTraversal(node.left)    
    if (node.right) preorderTraversal(node.right)
  }
  preorderTraversal(root)
  
  let max = Math.max(...Object.values(nodes))
  return Object.keys(nodes).filter(key => nodes[key] === max).map(val => +val)
};

//There is an alternative solution does the mode setting in 1 go
function findMode(root: TreeNode | null): number[] {
  
  let nodes: { [key: number]: number } = {} //hash contains frequency of each node val
  let modes: number[] = [] 
  let highestCount = 0
  
  const preorderTraversal = (node: TreeNode | null) => {
    if (!node) return;
    if (!nodes[node.val]) {
      nodes[node.val] = 0
    } 
    nodes[node.val] += 1

    if (nodes[node.val] > highestCount) {
      highestCount = nodes[node.val]
      modes = [node.val] 
    } else if (nodes[node.val] === highestCount && !modes.includes(node.val)) {
      modes.push(node.val)
    }

    if (node.left) preorderTraversal(node.left)    
    if (node.right) preorderTraversal(node.right)
  }
  preorderTraversal(root)
  
  return modes
};