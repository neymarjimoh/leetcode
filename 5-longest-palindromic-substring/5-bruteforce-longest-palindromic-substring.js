/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLength = 0;
    let output = "";
    for (let i = 0; i < s.length; i++) {
        let runningStr = s[i];
        if (maxLength === 0) output = runningStr;
        for (let j = i + 1; j < s.length; j++) {
            runningStr += s[j];

            if (isPalindrome(runningStr)) {
                if (j - i + 1 > maxLength) {
                    output = s.slice(i, j + 1);
                    maxLength = Math.max(maxLength, j - i + 1);
                }
            }
        }
    }
    return output;
};

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

/**
    { b: 2, a: 2, d: 1}

 */
