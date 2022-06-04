/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set(nums);
    const ans = set.size == nums.length
    return !ans;
    
    // Time: O(n)
    // Space: O(n)
};