/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        if (map.get(currentChar) >= start) {
            start = map.get(currentChar) + 1;
        }
        map.set(currentChar, i)
        maxLength = Math.max(maxLength, i -start + 1);
    }
    return maxLength;
};