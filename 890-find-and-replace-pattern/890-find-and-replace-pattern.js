/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */

const checkIfValueExistInObject = (obj, str) => {
    return Object.values(obj).includes(str);
};

var findAndReplacePattern = function(words, pattern) {
    const output = [];
    const n = words.length;
    const m = pattern.length;

    for (let i = 0; i < n; i++) {
        const word = words[i];
        const map = {};
        for (let j = 0; j < m; j++) {
            const currPattern = pattern[j];
            if (currPattern in map) {
                if (map[currPattern] !== word[j]) {
                    break;
                }
            } else {
                if (checkIfValueExistInObject(map, word[j])) {
                    break;
                } else {
                    map[currPattern] = word[j];
                }
            }
            if (j === (m - 1)) {
                output.push(word);
            }
        }
    }

    return output;
};
// loop through ech word
    // check if in map, if not present check if already word[j] is a value, then continue else pattern[j] -> word[j]
    // else if present in map, check if word[j] is same as map[pattern[j]] 
    // if not same, continue
    // else push to output
