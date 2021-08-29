function _intersection(nums1: number[], nums2: number[]): number[] {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)

  return Array.from(new Set([...set1].filter(x => set2.has(x))))
};
//this approach is O(n+m)

function intersection(nums1: number[], nums2: number[]): number[] { //O(n) time and O(1) space, based on discussion
  nums1.sort((a, b) =>  a - b)
  nums2.sort((a, b) => a - b) //assuming they are both sorted
  
  const intersections = []
  let i = 0, j = 0;
  
  while ((nums1[i] && nums2[j]) !== undefined) {
    
    const n1 = nums1[i], n2 = nums2[j];
    if (n1 === n2) {
      intersections.push(n1)
      while (n1 === nums1[i]) i++;
      while (n2 === nums2[j]) j++;
      console.log(i, j)
      continue
    }
    
    if (n2 > n1) {
      while (n1 === nums1[i]) i++
    } else {
      while (n2 === nums2[j]) j++
    }
  
  }
  
  return intersections
  
}