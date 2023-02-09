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

// approach 2 with one loop:
var numOfSubarrays = function (arr, k, threshold) {
  const arrayLength = arr.length;
  if (arrayLength < k) return 0;
  let result = 0;
  let sum = 0,
    left = 0;

  for (let right = 0; right < arrayLength; right++) {
    const currElem = arr[right];
    sum += currElem;
    if (right - left + 1 >= k) {
      const average = sum / k;
      if (average >= threshold) {
        result += 1;
      }
      sum -= arr[left];
      left++;
    }
  }

  return result;
};
