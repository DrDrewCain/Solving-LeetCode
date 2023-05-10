/**
 * @author Mark
 * @param k
 * @param prices
 * This function finds the maximum profit that can be made by buying and selling a stock at most `k` times.
 * The function takes an array of stock prices as input and returns the maximum profit.
 */
function maxProfitIV(k: number, prices: number[]): number {
    // `n` is the number of stock prices.
    const n = prices.length;
  
    // If `n` is less than 2 or `k` is less than 1, there is no profit to be made.
    if (n < 2 || k < 1) {
      return 0;
    }
  
    // If `k` is greater than or equal to `n / 2`, we can do as many transactions as we want.
    // In this case, we can simply buy the stock at the lowest price and sell it at the highest price.
    if (k >= n / 2) {
      return maxProfitTrans(prices);
    }
  
    // Initialize the dp array.
    // `dp[i][j]` stores the maximum profit that can be made by doing at most `i` transactions and selling the stock at the `j`th day.
    const dp: number[][] = Array.from({ length: k + 1 }, () => Array(n).fill(0));
  
    // Iterate over the number of transactions.
    for (let i = 1; i <= k; i++) {
      // Initialize the maximum difference between the current price and the lowest price bought so far.
      let maxDiff = dp[i - 1][0] - prices[0];
  
      // Iterate over the days.
      for (let j = 1; j < n; j++) {
        // Update the maximum difference.
        maxDiff = Math.max(maxDiff, dp[i - 1][j - 1] - prices[j - 1]);
  
        // Update the maximum profit.
        dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
      }
    }
  
    // Return the maximum profit.
    return dp[k][n - 1];
  }
  
  /**
   * This function finds the maximum profit that can be made by buying and selling a stock with unlimited transactions.
   * The function takes an array of stock prices as input and returns the maximum profit.
   */
  function maxProfitTrans(prices: number[]): number {
    // `profit` stores the maximum profit.
    let profit = 0;
  
    // Iterate over the prices.
    for (let i = 1; i < prices.length; i++) {
      // If the current price is greater than the previous price, add the difference to the profit.
      if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1];
      }
    }
  
    // Return the profit.
    return profit;
  }