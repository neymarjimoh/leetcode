/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
     // Using Kadane's algorithm
    let maxSum = nums[0];
    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        currSum = Math.max(currSum, 0); // revert to 0 if previous currSum is -ve
        currSum += currNum;
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
    
    // method 1
    let currentSum = nums[0];
    let maxSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
    
    // method 2
    if (nums.length == 0) return 0;
    let sum = 0;
    let maxSum = -Infinity; 
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
        sum = sum < 0 ? 0 : sum;
    }
    
    return maxSum;
};
