/**
 * @author Mark
 * @param nums 
 * Checks if it is possible to reach the last index of the array `nums`.
 * @returns `true` if it is possible, `false` otherwise.
 */
function canJump(nums: number[]): boolean {
    // `maxReach` is the maximum index that can be reached from the current index.
    let maxReach = 0;
  
    // Iterate over the array starting from the first index.
    for (let i = 0; i < nums.length; i++) {
      // If the current index is greater than the maximum reachable index, we cannot reach the current index.
      if (i > maxReach) {
        return false;
      }
  
      // Update the maximum reachable index to the maximum of the current index and the maximum reachable index plus the current jump length.
      maxReach = Math.max(maxReach, i + nums[i]);
    }
  
    // If the maximum reachable index is greater than or equal to the last index, we can reach the last index.
    return true;
  }

/** 
 * Alternative DP approach using bottom-up method. 
 * @author Mark
 * @param nums 
 * @returns 
 * This function checks if it is possible to reach the last index of the array `nums`.
 * The function uses a dynamic programming approach.
 *
 * The function first creates an array `dp` of length `n`.
 * The `dp[i]` element of the array stores whether it is possible to reach the last index starting from index `i`.
 * The function then initializes the `dp[n - 1]` element to `true`.
 *
 * The function then iterates over the array starting from the second-last index.
 * For each index `i`, the function computes the maximum index `maxJump` that can be reached from index `i`.
 * The function then iterates over the indexes from `i + 1` to `maxJump`.
 * If the function finds a value `dp[j]` that is `true` for any of these indexes, then the function sets the `dp[i]` element to `true`.
 *
 * The function then returns the value of the `dp[0]` element.
 */
function canJump(nums: number[]): boolean {
    const n = nums.length;
    // `dp[i]` stores whether we can reach the last index starting from index `i`.
    const dp = new Array<boolean>(n).fill(false);
    dp[n - 1] = true; // We can always reach the last index from the last index itself.
  
    // Starting from the second-last index, we fill up the `dp` array.
    for (let i = n - 2; i >= 0; i--) {
      // `maxJump` is the maximum index we can jump to from index `i`.
      const maxJump = Math.min(i + nums[i], n - 1);
  
      // Starting from the current index, we try to reach the last index.
      for (let j = i + 1; j <= maxJump; j++) {
        if (dp[j]) {
          dp[i] = true; // If we can reach the last index from index `j`, then we can reach it from index `i` too.
          break;
        }
      }
    }
  
    return dp[0]; // We can reach the last index from the first index if and only if `dp[0]` is `true`.
  }