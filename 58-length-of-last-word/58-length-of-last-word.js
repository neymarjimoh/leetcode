/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const wordArray = s.trim().split(" ");

    const lastWord = wordArray[wordArray.length - 1];

    return lastWord.length;
    
};