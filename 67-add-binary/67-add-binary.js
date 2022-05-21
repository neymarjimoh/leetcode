/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const alen = a.length-1;
    const blen = b.length-1;
    let pos = 0;
    let ans = "";
    let carry = 0;
    while (pos <= alen || pos <= blen) {
        let oneBits = (pos <= alen && a.charAt(alen-pos) === '1') + (pos <= blen && b.charAt(blen-pos) === '1') + carry;
        ans = (oneBits % 2).toString() + ans;
        carry = (oneBits >= 2)? 1: 0;
        pos++;
    }
    return (carry? carry.toString() : '') + ans;
};