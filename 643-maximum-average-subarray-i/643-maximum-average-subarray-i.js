/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // first approach
    // let sum = 0;
    // let maxAverage = -Infinity;
    // let windowStart = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     sum += nums[i];
    //     if (i >= k - 1) {
    //         const average = sum / k;
    //         maxAverage = Math.max(maxAverage, average);
    //         sum -= nums[windowStart];
    //         windowStart += 1;
    //     }
    // }
    // return maxAverage;
    
    // second approach
    let sum = 0,
        maxSum = 0;
    for(let i = 0; i < k; ++i) {
        sum += nums[i];
    }
    maxSum = sum;
    
    for(let i = k; i < nums.length; ++i) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum / k;
};