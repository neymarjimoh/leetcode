/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 4) {
        return n
    }
    var firstSum = 2
    var secondSum = 3
    
    for (var i = 4; i < n; i++) {
		// It is simply swapping two vars but choose this method for not using temp variable
        secondSum = firstSum + secondSum
        firstSum = secondSum - firstSum
    }
    return firstSum + secondSum
};
