/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length == 1) return 0;
    let profit = -Infinity;
    let currBuy = prices[0];
    // curr =1, profit =6
    for (let i = 1; i < prices.length; i++) {
        if (currBuy > prices[i]) {
            currBuy = prices[i];
        } else {
            const diff = prices[i] - currBuy;
            profit = Math.max(profit, diff);
        }
    }

    return profit <= 0 ? 0 : profit;
};
