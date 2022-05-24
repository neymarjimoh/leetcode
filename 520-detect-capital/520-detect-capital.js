/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var isThirdCorrect = word === word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    if (word === word.toUpperCase() || word === word.toLowerCase() || isThirdCorrect) {
        return true
    } else {
        return false
    }
};