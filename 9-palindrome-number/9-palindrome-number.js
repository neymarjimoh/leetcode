/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if(x < 0 ) {
        return false
    }
    
   const reversed = `${x}`.split("").reverse().join("");
    return reversed == x;
};