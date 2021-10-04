function _searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1];
  return [
    _binarySearch(nums, target, "left"),
    _binarySearch(nums, target, "right"),
  ];
}

const _binarySearch = (
  nums: number[],
  target: number,
  direction: "left" | "right"
) => {
  let start = 0;
  let end = nums.length;

  let index = -1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid;
    } else {
      index = mid;
      if (direction === "left") {
        //continue the search on the LHS
        end = mid;
      } else {
        //continue the search on the RHS
        start = mid + 1;
      }
    }
  }
  return index;
};

//The above does 2 BS for the same target... there is an alternate little trick
//Note the BS returns the left most index of the target, for the right index, we can search for target + 1

function searchRange(nums: number[], target: number): number[] {
  let leftIndex = binarySearch(nums, target, 0, nums.length);
  if (nums[leftIndex] !== target) return [-1, -1]; //couldnt find the target altogether
  let rightIndex = binarySearch(nums, target + 1, leftIndex, nums.length) - 1;
  return [leftIndex, rightIndex];
}

const binarySearch = (
  nums: number[],
  target: number,
  start: number,
  end: number
) => {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start; //note this is the index position the value should sit in if it exists
};
