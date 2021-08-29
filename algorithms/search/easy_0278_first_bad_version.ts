var solution = function(isBadVersion: any) {

  return function(n: number): number {
      
    let start = 1
    let end = n 
  
    while (start < end) {
      let mid = Math.floor((start + end) / 2)
      let isBad = isBadVersion(mid) //I was previously checking if current is bad and the previous version is NOT bad and returning mid
      if (isBad) end = mid
      else start = mid + 1
      
    }
    return start //mid will evetually be assigned to start...
  };
};