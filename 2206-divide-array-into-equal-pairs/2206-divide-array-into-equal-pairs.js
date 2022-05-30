/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    if (nums.length % 2 !== 0) return false;
    
    const map = {};
    
    for (let num of nums) {
        map[num] ? map[num]++ : map[num] = 1;
    }
    
    for (let key in map) {
        if (map[key] % 2 !== 0)  return false;
    }
    
    return true;
};