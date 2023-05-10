/**
 * This function finds the maximum profit that can be made by buying and selling a stock.
 * The `prices` array is an array of prices for the stock.
 * The function returns the maximum profit.
 * @author Mark
 * @param prices
 * 
 */
function maxProfitII(prices: number[]): number {
  // `maxProfit` is the maximum profit that can be made.
  let maxProfit = 0;

  // For each day, we calculate the profit that can be made by buying on the previous day and selling on the current day.
  for (let i = 1; i < prices.length; i++) {
    // `diff` is the difference between the current price and the previous price.
    const diff = prices[i] - prices[i - 1];

    // If the difference is positive, then we can make a profit by buying on the previous day and selling on the current day.
    if (diff > 0) {
      // We add the difference to the maximum profit.
      maxProfit += diff;
    }
  }

  // Return the maximum profit.
  return maxProfit;
}