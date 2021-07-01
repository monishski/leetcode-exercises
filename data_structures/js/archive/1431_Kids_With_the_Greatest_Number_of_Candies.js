var kidsWithCandies = function(candies, extraCandies) {
    return candies.map((curr, index, candies) => {
        return curr+extraCandies>=Math.max(...candies) ? true : false
    })
};
