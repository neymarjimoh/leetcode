/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = Infinity;
    let sum = 0, windowStart = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        while (sum >= target) {
            result = Math.min(result, i - windowStart + 1);
            sum -= nums[windowStart];
            windowStart += 1;
        }
    }
    
    if (result == Infinity) {
        result = 0;
    }
    
    return result;
};