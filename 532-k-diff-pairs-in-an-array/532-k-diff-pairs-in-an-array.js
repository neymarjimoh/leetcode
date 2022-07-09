/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    // nums.sort((a, b) => b - a);
    // const set = new Set();
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j= i + 1; j < nums.length; j++) {
    //         if (nums[i] - nums[j] == k) {
    //             const val = [nums[j], nums[i]];
    //             set.add(`${val}`)
    //         }
    //     }
    // }
    // return set.size;
    
    if (k < 0) return 0;
  let store = new Set();
  let result = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (store.has(nums[i] + k)) result.add(nums[i] + k);
    if (store.has(nums[i] - k)) result.add(nums[i]);
    store.add(nums[i]);
  }
  return result.size;
};