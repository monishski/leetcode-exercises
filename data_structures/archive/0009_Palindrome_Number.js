/**
 * @param {number} x
 * @return {boolean}
 */
var _isPalindrome = function(x) {
    return x.toString() === x.toString().split("").reverse().join("")
};

const isPalindrome = (x) => {
    if (x < 0 || (x%10 === 0 && x !== 0)) {
        return false
    }
    let inverse = 0
    while (inverse < x) {
        // As soon as the inverted number becomes greater than the original number, we've reached the half way mark. (We only need to check up to half way e.g. 1221)
        pop = x%10
        x = parseInt(x/10)
        inverse = inverse * 10 + pop
    }
    // The case of odd needs to be handled slight separately
    // e.g. with x=121, by the end of the above iteration, x = 1 and inverse = 12
    return x === inverse || x === parseInt(inverse/10)
}
