/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let globalMax = nums[0], globalMin = nums[0];
    let currMax = 0, currMin = 0;
    let total = 0;
    for (const num of nums) {
        total += num;
        currMax = Math.max(currMax + num, num); 
        currMin = Math.min(currMin + num, num);
        globalMax = Math.max(globalMax, currMax);
        globalMin = Math.min(globalMin, currMin);
    }
    return globalMax > 0 ? Math.max(globalMax, total - globalMin) : globalMax;
};
