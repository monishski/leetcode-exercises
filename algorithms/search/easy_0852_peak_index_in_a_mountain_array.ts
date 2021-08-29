function _peakIndexInMountainArray(arr: number[]): number {
  let peakIndex = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[peakIndex]) peakIndex++
    else break;
  }
  return peakIndex
  // More neatly
  // let peakIndex = 0;
  // while (arr[peakIndex] < arr[peakIndex]) peakIndex++;
  // return peakIndex;
};

function peakIndexInMountainArray(arr: number[]): number {
  let start = 0, end = arr.length;
  let mid
  while (start < end) {
    mid = start + Math.floor((end - start) / 2)
    if (arr[mid + 1] > arr[mid]) {
      start = mid + 1
    } else if (arr[mid - 1] > arr[mid]) {
      end = mid
    } else {
      break;
    }
  }
  return mid
};

