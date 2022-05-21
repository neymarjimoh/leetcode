/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const numsLength = nums.length;
    
    if(target > nums[numsLength - 1]) {
        return numsLength;
    }

    let i = 0;
    while(i <= numsLength) {
        if(target <= nums[i]){
            return i;
        } else {
            i++
        }
    }
};