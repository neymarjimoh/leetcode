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
    // const obj = {};
    // let ans
    // for (let i = 0; i < nums.length; i++) {
    //     const compliment = target - nums[i];
    //     if (compliment in obj) {
    //         ans = [i, obj[compliment]]
    //         return ans
    //     } else {
    //         obj[nums[i]] = i  
    //     }
    // }
    // return ans;
};