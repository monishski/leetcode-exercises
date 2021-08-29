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

function _averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];
  let queue = [root, null] //back is left so using push() to enqueue and use shift() to dequeue
  let result = [[]]
  while (queue.length) {
    let node = queue.shift()
    if (!node && queue.length === 0) break;
    if (!node) {
      result.push([])
      queue.push(null)
      continue
    }
    result[result.length-1].push(node.val)  
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return result.reduce((acc, level) => {
    return acc.concat(level.reduce((a, b) => a + b)/level.length)
  }, [])
};

//The BFS in the solution is a lot cleanear (from the comments)
function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];
  let result = []
  let queue = [root]
  let sum = 0
  while (queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let node = queue.shift()
      sum += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(sum / size)
    sum = 0
  }
  return result
}