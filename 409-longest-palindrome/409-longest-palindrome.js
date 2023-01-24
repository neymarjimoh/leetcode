/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    if (n === 0) return 0;
    const map = {};
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] in map) {
            map[s[i]] += 1;
            if (map[s[i]] % 2 === 0) {
                count += 2;
            }
        } else {
            map[s[i]] = 1;
        }
    }
    return count < n ? count + 1 : count;
};
