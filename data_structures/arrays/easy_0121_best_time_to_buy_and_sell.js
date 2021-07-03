/**
 * @param {number[]} prices
 * @return {number}
 */
var _maxProfit = function(prices) { //Works for test cases but times out
  let max = 0  
  for(let i=0; i<prices.length; i++) {
    for(let j=i+1; j<prices.length; j++) {
      max = Math.max(max, prices[j] - prices[i])
    }
  }
  return max
};

const maxProfit = prices => {
  let min = prices[0]
  let maxProfit = 0
  for(let i=1; i<prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    }
    maxProfit = Math.max(maxProfit, prices[i] - min)
  }
  return maxProfit
}

//Note you could also use divide and conquer...