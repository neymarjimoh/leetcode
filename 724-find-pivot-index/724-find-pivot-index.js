/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let leftSum = 0;
    for (let j = 0; j < nums.length; j++) {
        if ((sum - nums[j] - leftSum) === leftSum) {
            return j;
        }
        leftSum += nums[j];
    }
    
    return -1;
};