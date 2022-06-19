function longestCommonPrefix(strs: string[]): string {
    if (strs.length == 1) return strs[0];
    
    let prefix = "";
    const firstStr = strs[0];
    
    for (let i = 0; i < firstStr.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] == firstStr[i]) {
                if (j == strs.length - 1) {
                    prefix += firstStr[i];
                }
            } else {
                return prefix;
            }
        }
    }
    
    return prefix;
};