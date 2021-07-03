// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val===undefined ? 0 : val
    this.left = left===undefined ? null : left
    this.right = right===undefined ? null : right
  }
}

//Helper video: https://www.youtube.com/watch?v=zIkDfgFAg60&ab_channel=VivekanandKhyade-AlgorithmEveryDay
function binaryTreePaths(root: TreeNode | null): string[] {
  let result: string[] = []
  let stack: TreeNode[] = [] //using push and pop

  const helper = (node: TreeNode | null): void => {
    if (!node) return;
    stack.push(node)
    if (node.left) helper(node.left);
    if (!node.left && !node.right) { //end of tree
      result.push(stack.reduce((acc, node, index, arr) => acc += node.val + (index !== arr.length - 1 ? '->' : ''), ''))
    }
    if (node.right) helper(node.right);
    stack.pop()
  }

  // String based solutions (discussions)
  const _helper = (node: TreeNode | null, curr: string): void => {
    if (!node) return;
    if (!node.left && !node.right) {
      result.push(curr + node.val)
      return;
    }
    _helper(node.left, curr + node.val + '->')
    _helper(node.right, curr + node.val + '->')
  } 
  // _helper(root, '')

  helper(root)
  return result
};