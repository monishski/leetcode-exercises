/**
 * @param {string[]} strs
 * @return {string}
 */
 var __longestCommonPrefix = function(strs) {
  const sortedStrs = strs.sort((a, b) => a.length - b.length) 
  const shortestStr = sortedStrs[0]
  let result = ''
  let i = 0
  while (i < shortestStr.split('').length) {
    const current_char = shortestStr[i]
    
    // You can simplity the logic below significantly using the .every() function
    // https://leetcode.com/problems/longest-common-prefix/discuss/526694/Javascript-simple-solution-using-.every()-with-explanation
    // if (strs.every(str => str[i] === current_char)) {
    //   result += current_char    
    // } else {
    //   break
    // }
    
    let count = 0
    for(let j = 1; j < strs.length; j++) {
      const char = strs[j][i]
      if (char === current_char) {
        count++
      } 
    }
    
    if (count === strs.length - 1) {
      result += current_char
    } else {
      break
    }
    
    i++
  }
  
  return result
};

//The above is trully brute force...
//There are simpler solution that you might want to consider

//Hoziontal scanning

const _longestCommonPrefix = strs => {
  // LCP(S1...SN) = LCP(LCP(LCP(S1, S2), S3),...SN)
  let lcp = strs[0]
  for(let i = 1; i < strs.length; i++) {
    let j = 0 //find the index where both our current string and current lcp are the same
    while(strs[i][j] && lcp[j] && strs[i][j] === lcp[j]) j++
    lcp = strs[i].slice(0, j)
  }
  return lcp
  // This combines first of the solution and one that is in the discussion
  // https://leetcode.com/problems/longest-common-prefix/discuss/6983/Js-higher-order-function-solution-with-concise-and-easy-to-understand-code
} 

//Time compleixty is O(S) where S is the num of all characters in all the strings.
//In the worst case all n strings are the same, the algorith mcompares the string S1 with all other strings
//Space complexity is O(1)

const longestCommonPrefix = strs => {
  return lcpDivideAndConquer(strs, 0, strs.length-1)
}

const lcpDivideAndConquer = (strs, left, right) => {
  if (left == right) {
    return strs[left]
  }
  else {
    const middle = Math.floor((left + right) / 2)
    const lcpLeft = lcpDivideAndConquer(strs, left, middle)
    const lcpRight = lcpDivideAndConquer(strs, middle + 1, right)
    return lcp(lcpLeft, lcpRight)
  } 
}

const lcp = (left, right) => {
  const min = Math.min(left.split('').length, right.split('').length)
  for(let i = 0; i < min; i++) {
    if (left.charAt(i) !== right.charAt(i)) {
      return left.slice(0, i)
    }
  }
  return left.slice(0, min)
}

//Notes:
//The D&C comes from the associate property of the lcp operation
//Split split the problem into 2 subproblems and use their solutions to constrcutr a solution of the main problem

//Time complexity is O(S) where S is the number of all characters in the array = S = mn. 
//Particularly, 2T(n/2) + O(m), in the best case this algorithm perform O(minLen x n) comparisons where minLen is the shortest string of the array
//Space complexity is O(mlogn).. there is memory overhead since we store recursive stacks in the execution stack, there are logn recursive stacks, each store m values 