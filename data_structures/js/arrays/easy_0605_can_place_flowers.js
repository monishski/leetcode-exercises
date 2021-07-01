/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  flowerbed.unshift(0)
  flowerbed.push(0)
  let counter = 0
  for(let i = 1; i < flowerbed.length - 1; i++) {
    if (flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0) {
      counter++
      flowerbed[i] = 1
      //you can optimise this by stopping the loop if the count >= n
    }
  }
  if (counter >= n) {
    return true
  }
  return false
};