/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (!isAlphaNumeric(s[left])) {
            left++;
        } else if (!isAlphaNumeric(s[right])) {
            right--;
        } else {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
    }
    return true;
};

function isAlphaNumeric(char) {
    // note: numbers have ascii code between 48 and 57
    // uppercase has between 65 and 90
    // lowercase has between 97 and 122
    const charCode = char.charCodeAt(0);
    return (charCode > 47 && charCode < 58) || (charCode > 96 && charCode < 123);
}
