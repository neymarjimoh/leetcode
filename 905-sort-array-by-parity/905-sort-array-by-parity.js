/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    if (nums.length == 1) return nums;
    const evenNums = [];
    const oddNums = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            evenNums.push(nums[i]);
        } else {
            oddNums.push(nums[i])
        }
    }
    return [...evenNums, ...oddNums]
};