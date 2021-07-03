/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// https://www.youtube.com/watch?v=0PHGaGma6j8&ab_channel=CodeAndCoffee //Great explanation
var _merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
    } else {
      nums1[k] = nums2[j]
      j--
    }
    k--
  }
  while (j >= 0) {
    nums1[k] = nums2[j]
    k--
    j--
  }
  return nums1
};

//I think this can be written more succintly
const merge = (nums1, m, nums2, n) => {
let i = m - 1
  let j = n - 1
  let k = m + n - 1
  //for this you can have just that j >= 0?
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
    //JS is neat!
    //nums1[k--] = nums1[i] > nums[j] ? nums1[i--] : nums2[j--]
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--]
  }
  return nums1
}
//Time complexity is O(m+n)
//Space complexity is O(1) //didnt create anything new

//There is a solution that I am fan on on discussions:
const merge_ = (nums1, m, nums2, n) => {
  let k = m + n - 1;
  m--; n--;
  while (n >= 0) {
    nums1[k--] = m >= 0 && nums1[m] > nums2[n] 
      ? nums1[m--]
      : nums2[n--]
  }
  return nums1
}