var numberOfSteps  = function(num) {
    numSteps = 0;
    while (num) {
        if (num%2===0) { num=num/2; }
        else { num--; }
        numSteps++;
    }
    return numSteps
};

//A second neat JS solution is one that uses recursion:

// var numberOfSteps  = function(num, count = 0) {
//     if (num === 0) return count;
//     return num % 2 === 0 ? numberOfSteps(num/2, count+1) : numberOfSteps(num-1, count+1);
// };
