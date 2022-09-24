/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let currMaxProduct = nums[0]; //6
    let currMinProduct = nums[0]; //3
    let prevMaxProduct = nums[0]; // 6
    let prevMinProduct = nums[0]; //3
    let answer = nums[0]; //2
    
    for (let i = 1; i < nums.length; i++) {
        currMaxProduct = Math.max(nums[i], nums[i] * prevMaxProduct, nums[i] * prevMinProduct);
        currMinProduct = Math.min(nums[i], nums[i] * prevMaxProduct, nums[i] * prevMinProduct);
        answer = Math.max(answer, currMaxProduct);
        prevMinProduct = currMinProduct;
        prevMaxProduct = currMaxProduct;
    }
    return answer;
};