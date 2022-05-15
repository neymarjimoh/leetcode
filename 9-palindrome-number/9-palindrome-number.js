/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if(x < 0 ) {
        return false
    }
    
    let reversed = 0 
    let  rem = 0
    let original = x
    
    while(x > 0) {
        reversed = (reversed * 10) + (x % 10)
        x = parseInt(x/10)
    }
    
    return original == reversed  
};