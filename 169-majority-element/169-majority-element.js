/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //length = 4
    //maj_elment = 4/2 = 2 times
    //[3,2,3]
    let num_of_times = nums.length / 2
    let obj = {}
    
    if(nums.length == 1) {
        return nums[0]
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in obj){
            obj[nums[i]] += 1
            if(obj[nums[i]] > num_of_times){
                return nums[i]
            }
        } else {
            obj[nums[i]] = 1
        }
    }
    
};