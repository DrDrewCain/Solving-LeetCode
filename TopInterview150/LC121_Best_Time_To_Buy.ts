/**
 * Finds the maximum profit that can be achieved by buying and selling a stock.
 * @author Mark
 * @param prices
 * Args:
 *   prices: An array of prices.
 *
 * Returns:
 *   The maximum profit.
 */

function maxProfit(prices: number[]): number {
  /**
   * Initialize the min price and max profit.
   *
   * minPrice: The minimum price of the stock.
   * maxProfit: The maximum profit that can be achieved by buying and selling the stock.
   */
  let minPrice = Infinity; // Initialize the min price to infinity. This is a very large number, so any price will be less than it.
  let maxProfit = 0; // Initialize the max profit to 0.

  /**
   * Iterate over the prices.
   *
   * price: The current price of the stock.
   */
  for (const price of prices) {
    /**
     * Update the min price to the current price if it is less than the current min price.
     */
    minPrice = Math.min(minPrice, price);

    /**
     * Update the max profit to the current profit if it is greater than the current max profit.
     *
     * profit: The profit that can be achieved by buying the stock at the min price and selling it at the current price.
     */
    let profit = price - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }

  /**
   * Return the max profit.
   */
  return maxProfit;
}

/**
 * Alternative approach
  * @param prices
 * @returns
 * 
 */

function maxProfit2(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;
  
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  
  return maxProfit;
}
