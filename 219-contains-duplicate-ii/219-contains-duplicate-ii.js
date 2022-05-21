/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let length = nums.length;
    let obj = {};
    for (let i = 0; i < length; i++)  {
        if (i - obj[nums[i]] <= k) {
            return true;
        } else {
            obj[nums[i]] = i;
        };
    };
    return false;
};