/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    if (s.length === 0) return 0;
    const isPositive = s[0] === '-' ? false : true;
    let intS = "0";
    let i = 0;
    if (s[0] === "-" || s[0] === "+") i += 1;
    for (i; i < s.length; i++) {
        const currElem = s[i];
        if (!isDigit(currElem)) {
                break;
        }
        intS += currElem;
    }
    const finalValue = isPositive ? Number(intS) : -1 * Number(intS);
    return finalValue < Math.pow(-2, 31) ? Math.pow(-2, 31) : finalValue > (Math.pow(2, 31) - 1) ? Math.pow(2, 31) - 1 : finalValue;
};

function isDigit(char) {
    const _char = char.charCodeAt(0);
    return _char >= 48 && _char <= 57;
}
