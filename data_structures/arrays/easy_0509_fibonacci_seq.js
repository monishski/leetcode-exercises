/**
 * @param {number} n
 * @return {number}
*/
var ___fib = function(n) {
  //This was originally badly written
  if (n <= 1) {
    return n
  } 
  return fib(n-1) + fib(n-2)
};

//Time complexity is O(2^N)... this is the slowest way to solve the fib seq because it takes exponenial time, the amount of operations needed, for each level of recursion grows exponentially as the depth approach N
//Space complexity is O(N)... need spacep proportionate to N to account for the max size of the stack, in memory

const _memoize = fn => {
  let cache = {}
  return (...args) => { //the rest operator converts it into an array
    let n = args[0]
    if (n in cache) {
      return cache[n]
    } else {
      let result = fn(n)
      cache[n] = result
      return result
    }
  }
}

const __fib = _memoize(___fib) //a lot faster

//The solution takes a different appraoch with memoization
const memoizeBottomUp = n => { //this is so called bottom up appraoch
  const cache = new Array(n)
  cache[0] = 0
  cache[1] = 1
  
  for(let i=2; i<cache.length; i++) {
    cache[i] = cache[i-1] + cache[i-2]
  }
  return cache
}

const fibBottomUp = n => {
  return memoizeBottomUp(n)
}
//This complexity is O(N) - each number starting at 2 up to including N is visited and then stored for O(1) access later
//Space complexit is O(N) - the size of the data structure is proportional to N

//The other approach is Top to Bottom which is effectively what I did for my memoization solution
//Except you are not using objects but are using arary
const cache = new Array(30)

const fibTopBottom = n => {
  if (n <= 1) {
    return n
  }
  cache[0] = 0
  cache[1] = 1
  return memoizeTopBottom(n)
}

const memoizeTopBottom = n => {
  if (cache[n] !== undefined) {
    return cache[n]
  }
  cache[n] = memoizeTopBottom(n-1) + memoizeTopBottom(n-2)
  return memoizeTopBottom(n) //I didnt quite understand this bit
}

//Dont forget the old school method of interation for fib sequence
const _fib = n => {
  if (n <= 1) { 
    return n
  }
  let prev = 1
  let curr = 1
  let counter = 2
  while (counter < n) {
    let temp = prev
    prev = temp + curr
    curr = temp
    counter++
  }
  return prev
}
//Time complexity is O(n) each value from 2 to N is visited Once
//Space complexity is O(1)

//You can clean this function above
const fib = n => {
  if (n < 2) return n
  let prev = 0, curr = 1
  for(let i=1; i<n; i++) {
    [prev, curr] = [curr, curr+prev]
  }
  return curr
}
