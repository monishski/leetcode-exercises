function _maxArea(height: number[]): number { //this passes the test but is too slow
  let maxArea = Math.max();
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      if ((j - i) * Math.min(height[j], height[i]) > maxArea) {
        maxArea = Math.max(maxArea, (j - i) * Math.min(height[j], height[i]))
      }
    }
  }
  return maxArea
};

// I got here after the hints!
function maxArea(height: number[]): number {
  let start = 0
  let end = height.length - 1
  let maxArea = Math.max();
  while (start < end) {
    let area = Math.min(height[start], height[end]) * (end - start)
    maxArea = Math.max(area, maxArea)
    if (height[end] >= height[start]) start++;
    else end--;
  }
  return maxArea
}