/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    if (arr.length === 1) return 1;
    let left = 0, right = 1;
    let currTubulentSize = 0;
    let maxTubulentSize = 0;
    while (right < arr.length) {
        currTubulentSize = right - left + 1;
        if (!isTurbulent(arr, right)) {
            if (arr[right - 1] === arr[right]) currTubulentSize--;
            maxTubulentSize = Math.max(maxTubulentSize, currTubulentSize);
            left = right;
        }
        right++;
    }
    return maxTubulentSize;
};

function isTurbulent(arr, right) {
    if (arr[right - 1] < arr[right] && arr[right] > arr[right + 1]) return true;
    if (arr[right - 1] > arr[right] && arr[right] < arr[right + 1]) return true;
    return false;
}
