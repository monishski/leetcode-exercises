var _minDepth = function(root) {
  if (!root) return 0;
  if (!root.left) return 1 + minDepth(root.right)
  if (!root.right) return 1 + minDepth(root.left)
  //You could write the above as 
  // if (!root.left || !root.right) return 1 + Math.max(minDepth(root.left), minDepth(root.right))
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};

//This is very similar to the maxDepth question but you have to note the special case the tree is skewed (e.g. 1 child)

//You can also do it BFS, if any node in the traversal has left and right as null, then we return that node

const minDepth = root => {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let queue = [root] //front is right (use push to enqueue) and back in left so (use shift to dequeue)
  let depth = 1

  while (queue.length > 0) {
    let n = queue.length //this is the number of nodes at the current level
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      if (!node.left && !node.right) return depth
      else {
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
    depth++
  }
  return depth
}