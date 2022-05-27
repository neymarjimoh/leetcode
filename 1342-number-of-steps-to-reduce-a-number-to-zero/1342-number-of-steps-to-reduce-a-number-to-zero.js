/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let noOfSteps = 0;
    while (num > 0) {
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num --
        }
        noOfSteps += 1;
    }
    return noOfSteps;
};