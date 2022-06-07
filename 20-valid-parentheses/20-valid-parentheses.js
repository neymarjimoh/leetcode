/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const matches = { "(" : ")", "{" : "}", "[" : "]" };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] in matches) {
            stack.push(s[i]);
        } else {
            if (s[i] !== matches[stack.pop()]) {
                return false;
            }    
        }
    }
    return stack.length === 0;
};
