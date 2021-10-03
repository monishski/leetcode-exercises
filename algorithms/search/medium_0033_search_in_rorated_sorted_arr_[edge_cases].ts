//Based on solution in disucssion
function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    //the equality always messes me up!
    let mid = Math.floor((end + start) / 2);
    let val = nums[mid];

    if (val === target) return mid;

    let first = nums[start];
    let last = nums[end];

    // When you divide the rotated array into two halves, using mid index, at least one of subarray should remain sorted ALWAYS.
    if (first <= val) {
      //Check if LHS is sorted
      if (first <= target && target <= val) {
        //target is on LHS
        end = mid - 1;
      } else {
        //target is on RHS
        start = mid + 1;
      }
    } else {
      //Check if RHS is sorted
      if (last >= target && target >= val) {
        //target is on RHS
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}
