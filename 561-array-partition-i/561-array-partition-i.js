/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let maximizedSum = 0;
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i += 2) {
        maximizedSum += nums[i];
    }
    
    return maximizedSum;
};