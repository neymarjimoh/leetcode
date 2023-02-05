/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    let greater = 1;
    let smaller = 1;
    let ans = 1;
    for (let i = 1; i < arr.length; i++) {
        let newSmaller = 1, newGreater = 1;
        const currNum = arr[i];
        const previousNum = arr[i - 1];
        if (currNum > previousNum) {
            newGreater = smaller + 1;
        } else if (currNum < previousNum) {
            newSmaller = greater + 1;
        }
        ans = Math.max(ans, newSmaller, newGreater);
        smaller = newSmaller;
        greater = newGreater;
    }
    return ans;
};
