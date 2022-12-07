/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    for (let i = 0; i < strs.length; i++) {
        const originalWord = strs[i];
        const sortedWord = originalWord.split('').sort().join('');
        if (sortedWord in map) {
            console.log(map[sortedWord])
            map[sortedWord] = [...map[sortedWord], originalWord];
        } else {
            map[sortedWord] = [originalWord];
        }
    }
    return Object.values(map);
};
