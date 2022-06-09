/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {    
    
//     let result = 0;
//     let min = prices[0];
//     for(let i = 1; i < prices.length; i++) {
//         min = Math.min(prices[i], min);
//         result = Math.max(result, prices[i] - min);
//     }
//     return result;
    
    // use https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/1735550/Python-Javascript-Easy-solution-with-very-clear-Explanation to understand better
    // make prices[left] be buy and price[right] to sell
    let left = 0;
    let right = 0;
    let max_profit = 0;
    
    // iterate as long as the right is not more than array length
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            const currProfit = prices[right] - prices[left];
            max_profit = Math.max(max_profit, currProfit);
        } else {
            left = right;
        }
        right++
    }
    
    return max_profit;
};
