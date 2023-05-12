/**
 * Rotates an array to the right by k steps.
 *@author Mark
 * @param nums The array to rotate.
 * @param k The number of steps to rotate the array.
 * @returns The rotated array.
 */
function rotate(nums: number[], k: number): number[] {
    // Declare variables.
    const n = nums.length;
    k %= n; // Fix for negative k values.
  
    // Reverse the entire array.
    reverse(nums, 0, n - 1);
  
    // Reverse the first k elements.
    reverse(nums, 0, k - 1);
  
    // Reverse the remaining elements.
    reverse(nums, k, n - 1);
  
    // Return the rotated array.
    return nums;
  }
  
  /**
   * Reverses the elements of an array in the specified range.
   *
   * @param nums The array to reverse.
   * @param start The start index of the range.
   * @param end The end index of the range.
   */
  function reverse(nums: number[], start: number, end: number): void {
    // Iterate over the range.
    while (start < end) {
      // Swap the current elements.
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }