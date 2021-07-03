var _invertTree = function(root) {
  if (!root) return null;
  [root.left, root.right] = [root.right, root.left]
  invertTree(root.left)
  invertTree(root.right)
  return root
};
//Space complexity: because of recursion O(h) function calls will be placed on the stack where h is the height of the tree

const invertTree = root => { //similar to BFS
  if (!root) return null;
  //front is to the left and back to the right, so use unshift to enqueue and pop to dequeue
  let queue = [root] //the queue contains all the nodes whose children are yet to be swapped
  while (queue.length) {
    let node = queue.pop();
    [node.left, node.right] = [node.right, node.left];
    if (node.left) queue.unshift(node.left)
    if (node.right) queue.unshift(node.right)
  }
  return root
}