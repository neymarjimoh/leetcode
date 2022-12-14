/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, map = {}) {
    if (map[n]) return map[n];
    if (n == 1) return true;
    if (n <= 9 && n % 2 == 0) return false;
    const nString = '' + n;
    let sum = 0;
    for (let i = 0; i < nString.length; i++) {
        const intChar = parseInt(nString[i]);
        sum += intChar ** 2;
    }
    map[n] = isHappy(sum);
    return isHappy(sum, map) ? true : false;
};
