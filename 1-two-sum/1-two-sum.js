/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    let ans
    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        if (compliment in obj) {
            ans = [i, obj[compliment]]
            return ans
        } else {
            obj[nums[i]] = i  
        }
    }
    return ans;
};