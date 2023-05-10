/**
 * @author Mark
 * @param intervals Determine how many steps to take at a time when calculating the maximum reachable index.
 * This function merges overlapping intervals in an array.
 * The function takes an array of intervals as input and returns an array of merged intervals.
 */
function mergeInterval(intervals: [number, number][]): [number, number][] {
    // Sort the intervals by their start times.
    // This ensures that overlapping intervals are next to each other.
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Initialize an array to store the merged intervals.
    const merged: [number, number][] = [];
  
    // Iterate over the intervals.
    for (const interval of intervals) {
      // If the current interval does not overlap with the last interval in the merged array, add it to the merged array.
      if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
        merged.push(interval);
      } else {
        // Otherwise, merge the current interval with the last interval in the merged array.
        // This is done by updating the end time of the last interval to the end time of the current interval.
        merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
      }
    }
  
    // Return the merged intervals.
    return merged;
  }

  /**
   * Alt
   */

/**
 * @author Mark
 * @param intervals
 * This function merges overlapping intervals in an array.
 * The function takes an array of intervals as input and returns an array of merged intervals.
 */
function mergeIntervalsAlt(intervals: [number, number][]): [number, number][] {
    // Sort the intervals by their start times.
    // This ensures that overlapping intervals are next to each other.
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Initialize an array to store the merged intervals.
    const merged: [number, number][] = [];
  
    // Iterate over the intervals.
    for (const [start, end] of intervals) {
      // If the current interval does not overlap with the last interval in the merged array, add it to the merged array.
      if (!merged.length || merged[merged.length - 1][1] < start) {
        merged.push([start, end]);
      } else {
        // Otherwise, merge the current interval with the last interval in the merged array.
        // This is done by updating the end time of the last interval to the end time of the current interval.
        merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
      }
    }
  
    // Return the merged intervals.
    return merged;
  }