// Need this explanation but implementation was independent: https://www.youtube.com/watch?v=6qXO72FkqwM&t=910s&ab_channel=TECHDOSE
function nextPermutation(nums: number[]): void {
  //in-place modification, use [1,2,3,4,3,2,3,5,5,4,4,2] as example
  if (nums.length === 1) return;

  //Find first index of peak with lowest weight
  let peakIndex = nums.length - 1;
  while (peakIndex > 0 && nums[peakIndex - 1] >= nums[peakIndex]) peakIndex--;

  if (peakIndex === 0) {
    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
      [nums[i], nums[nums.length - i - 1]] = [
        nums[nums.length - i - 1],
        nums[i],
      ];
    }
    return;
  }

  //See if there is a value to the right of the peak which is greater than the value left to the peak with the lowest weight
  let leftIndex = peakIndex - 1;
  let leftValue = nums[leftIndex];
  while (peakIndex < nums.length && nums[peakIndex] > leftValue) peakIndex++;
  peakIndex--; //readjust as the above goes one to far to the right

  //Replace value left of the first peak with the adjusted peak index (if necessary)
  [nums[leftIndex], nums[peakIndex]] = [nums[peakIndex], nums[leftIndex]];

  //Sort the values right to the left of the first peak
  for (
    let i = leftIndex + 1;
    i < leftIndex + 1 + Math.floor((nums.length - (leftIndex + 1)) / 2);
    i++
  ) {
    let adjIndex = i - (leftIndex + 1);
    [nums[i], nums[nums.length - adjIndex - 1]] = [
      nums[nums.length - adjIndex - 1],
      nums[i],
    ];
  }
}
