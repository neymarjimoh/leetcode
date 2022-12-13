/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    for (let j = 0; j < nums.length; j++) {
      const diff = target - nums[j];
      if (diff in obj) {
        return [j, obj[diff]];
      } else {
        obj[nums[j]] = j;
      }
    }
};
                                    
