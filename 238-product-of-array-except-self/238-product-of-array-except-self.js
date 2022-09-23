/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // get products from the left to the element
    let productSoFar = 1;
    const answer = [];
    for (let i = 0; i < nums.length; i++) {
        answer[i] = productSoFar;
        productSoFar *= nums[i];
    }
    
    // get product to the element from the right
    productSoFar = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= productSoFar;
        productSoFar *= nums[i];
    }
    return answer;
};