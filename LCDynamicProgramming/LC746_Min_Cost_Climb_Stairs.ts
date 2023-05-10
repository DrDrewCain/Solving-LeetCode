/**
 * This function returns the minimum cost to climb a staircase.
 *
 * The cost of each step is given in the array `cost`.
 * @author Mark
 * @param cost The array of costs.
 * @returns The minimum cost to climb the staircase.
 */
function minCostClimbingStairs(cost: number[]): number {
    // Initialize the minimum costs to reach the top from each step.
    // `minCost0` is the minimum cost to reach the top from step 0.
    // `minCost1` is the minimum cost to reach the top from step 1.
    let minCost0 = cost[0];
    let minCost1 = cost[1];
  
    // Iterate over the remaining steps.
    for (let i = 2; i < cost.length; i++) {
      // Calculate the minimum cost to reach the current step from each of the previous steps.
      // `minCost` is the minimum cost to reach the current step.
      let minCost = Math.min(minCost0 + cost[i], minCost1 + cost[i]);
  
      // Update the minimum costs to reach the current step.
      minCost0 = minCost1;
      minCost1 = minCost;
    }
  
    // Return the minimum cost to reach the top.
    return Math.min(minCost0, minCost1);
  }