/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (!nums) return 0;
    if (nums.length === 1) {
        if(nums[0] === val) return 0;
        return 1;
    }
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k += 1;
        }
    }
    return k;
};
