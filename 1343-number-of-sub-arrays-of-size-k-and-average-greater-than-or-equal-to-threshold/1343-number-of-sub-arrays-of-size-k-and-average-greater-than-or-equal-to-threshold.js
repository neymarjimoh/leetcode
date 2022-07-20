/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    // Sliding window sample
    let counter = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    
    if (sum / k >= threshold) {
        counter += 1;
    }
    
    for (let j = k; j < arr.length; j++) {
        sum -= arr[j - k];
        sum += arr[j];
        
        if (sum / k >= threshold) {
            counter += 1;
        }
    }
    
    return counter;
};