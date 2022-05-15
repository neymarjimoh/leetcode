/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    
    if (s.length === 1) {
        return symbols[s]
    }
    
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (symbols[s[i]] < symbols[s[i+1]]) {
            const val = symbols[s[i+1]] - symbols[s[i]]
            ans += val
            i++
        } else {
            ans += symbols[s[i]]
        }
    }
    return ans
};





