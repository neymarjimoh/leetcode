/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums.sort((a, b) => b - a);
    const set = new Set();
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        for (let j= i + 1; j < nums.length; j++) {
            if (nums[i] - nums[j] == k) {
                const val = [nums[j], nums[i]];
                set.add(`${val}`)
            }
        }
    }
    console.log(set)
    return set.size;
};