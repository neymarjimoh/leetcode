/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: number[], target: number): number[] {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        const diff = target - currNum;
        if (diff in map) {
            return [map[diff], i];
        }
        map[currNum] = i;
    }
};                                  
