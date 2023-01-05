/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 1;
    for (right = 1; right < nums.length; right++) {
        const previous = nums[right - 1];
        const currNum = nums[right];
        if (currNum != previous) {
            nums[left] = nums[right];
            left += 1;
        }
    }
    return left;
};
