/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const frequencyMap = {};
    let left = 0;
    let result = 0;
    for (let right = 0; right < s.length; right++) {
        if (s[right] in frequencyMap) {
            frequencyMap[s[right]] += 1;
        } else {
            frequencyMap[s[right]] = 1;
        }
        const highestFrequency = Object.values(frequencyMap);
        const isInValid = (right - left + 1) - Math.max(...highestFrequency) > k;
        if (isInValid) {
            frequencyMap[s[left]] -= 1;
            left += 1;
        }
        result = Math.max(result, right - left + 1);
    }
    return result;
};
