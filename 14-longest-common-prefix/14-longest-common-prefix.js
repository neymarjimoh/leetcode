/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 1) return strs[0];
    let res = "";
   const firstStr = strs[0];
    for (let i = 0; i < firstStr.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].charAt(i) == firstStr[i]) {
                if (j == strs.length - 1) {
                    res += firstStr[i];
                } else {
                    continue;
                }
            } else {
                return res;
            }
        }
    }
    return res;
    
        

};