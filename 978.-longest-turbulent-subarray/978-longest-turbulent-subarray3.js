/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
  let N = arr.length;
  if (N === 1)
    return 1;

  let dp = new Array(N).fill(1);
  dp[0] = 1;
  dp[1] = (arr[0] === arr[1]) ? 1 : 2;
  let max_value = dp[1];

  for (i = 2; i < N; i++) {
    if (arr[i-2] < arr[i-1] && arr[i-1] > arr[i])
      dp[i] = dp[i-1] + 1;
    else if (arr[i-2] > arr[i-1] && arr[i-1] < arr[i])
      dp[i] = dp[i-1] + 1;
    else if (arr[i-1] !== arr[i])
      dp[i] = 2;

    max_value = Math.max(max_value, dp[i]);
  }
  
  return max_value;
};
