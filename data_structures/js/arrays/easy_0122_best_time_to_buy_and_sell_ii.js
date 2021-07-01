/**
  * @param {number[]} prices
  * @return {number}
*/
var __maxProfit = function(prices) {
  return getMaxProfitRecursively(prices, 0)
};

const getMaxProfitRecursively = (prices, startIndex) => {
  let max = 0;
  for(let i=startIndex; i<prices.length; i++) {
    for(let j=i+1; j<prices.length; j++) {
      let profit = (prices[j] - prices[i]) + getMaxProfitRecursively(prices, j+1)
      max = Math.max(profit, max)
    }
  }
  return max
}
//Note: I got this from the solution but implemented it myself
//This is too slow but passes most cases
//Time Complexity O(n^n) => Because recursive function is called n^n times
// ...See comments for explantion but the base is as the following:
// At stack depth 0, the outer loop is called N times and the inner loop N-1 times,
// At stack depth 1, the outer loop is called N-1 times and the inner loop N-2 times...
// So at the bottom of the call stack, our run time would be O(N(N-1)(N-1)(N-2)...(N-k)(N-k-1)...2*1) ~ O(N^2N) ~ O(N^N)
//Space Complexity O(n) => Depth of recursion is n

//Peak and valley approach:
const _maxProfit = prices => {
  let index = 1
  let valley, peak;
  let profit = 0
  while (index < prices.length) {
    while (index < prices.length && prices[index] <= prices[index-1]) {
      index++
    }
    valley = prices[index-1]
    while (index < prices.length && prices[index] >= prices[index-1]) {
      index++
    }
    peak = prices[index-1]
    profit += (peak - valley)
  }
  return profit
}
// Time complexity is O(n)
// Space complexity is O(1)

const maxProfit = prices => { //single pass
  let profit = 0  
  for(let i=1; i<prices.length; i++) {
    if (prices[i] > prices[i-1]) {
      profit += prices[i] - prices[i-1]
    }
  }
  return profit
}