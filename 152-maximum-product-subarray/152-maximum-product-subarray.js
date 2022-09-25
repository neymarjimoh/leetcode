/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = -Infinity;
    let currMax = 1;
    let currMin = 1;
    for (let i = 0; i < nums.length; i++) {
        let temp = currMax;
        currMax = Math.max(nums[i], currMax * nums[i], currMin * nums[i]);
        currMin = Math.min(nums[i], temp * nums[i], currMin * nums[i]);
        max = Math.max(max, currMax);
    }
    return max;
};