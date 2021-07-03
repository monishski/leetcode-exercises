// https://www.youtube.com/watch?v=12omz-VAyRk&ab_channel=NickWhite
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  return constructBST(nums, 0, nums.length-1)
};

const constructBST = (nums, start, end) => {
  if (start > end) return null;
  let midpoint = Math.floor((start + end) / 2) 
  let node = new TreeNode(nums[midpoint], null, null)
  node.left = constructBST(nums, start, midpoint - 1)
  node.right = constructBST(nums, midpoint + 1, end)
  return node
}