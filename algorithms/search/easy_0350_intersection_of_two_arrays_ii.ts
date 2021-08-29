function _intersect(nums1: number[], nums2: number[]): number[] {
  if (nums2.length > nums1.length) {
    [nums1, nums2] = [nums2, nums1]
  }
  
  const store = {}
  
  for (let i = 0; i < nums1.length; i++) {
    store[nums1[i]] = store[nums1[i]] + 1 || 1
  }
  
  let intersections = []
  
  for (let i = 0; i < nums2.length; i++) {
    if (store[nums2[i]]) {
      intersections.push(nums2[i])
      store[nums2[i]]--
    }
  }
  
  return intersections
};

//Assuming both arrays are sorted
function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  let intersections = []
  let i = 0, j =0;
  while (i < nums1.length && j < nums2.length) {

    const n1 = nums1[i], n2 = nums2[j]

    if (n1 === n2) {
      intersections.push(n1)
      i++; j++;
      continue
    }

    if (n2 > n1) i++;
    else j++

  }
  return intersections
};

