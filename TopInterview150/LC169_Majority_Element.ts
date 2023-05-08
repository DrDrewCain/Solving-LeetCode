/**
 * Finds the majority element in an array.
 * @author Mark
 * Hash tables Solution
 * @param nums The array to search.
 * @returns The majority element, or -1 if no majority element exists.
 */
function majorityElement(nums: number[]): number {
    // Create a map to store the frequency of each element.
    const freq = new Map<number, number>();
  
    // Iterate over the array.
    for (const num of nums) {
      // Get the frequency of the current element.
      const count = freq.get(num) || 0;
  
      // Increment the frequency of the current element.
      freq.set(num, count + 1);
  
      // If the frequency of the current element is greater than half the length of the array,
      // then return the current element.
      if (count > nums.length / 2) {
        return num;
      }
    }
  
    // No majority element exists.
    return -1;
  }

/**
 * Finds the majority element in an array.
 *  A more iterative approach instead of using hash tables.
 * This approach is called the Boyer-Moore Voting Algorithm.
 * @param nums The array to search.
 * @returns The majority element, or -1 if no majority element exists.
 */
function majorityElemen2(nums: number[]): number {
    // Declare variables.
    let count = 1,
      majority = nums[0];
  
    // Iterate over the array.
    for (let i = 1; i < nums.length; i++) {
      // If the current element is equal to the majority element,
      // then increment the count.
      if (nums[i] === majority) {
        count++;
      } else {
        // Otherwise, decrement the count.
        count--;
      }
  
      // If the count is 0,
      // then set the majority element to the current element.
      if (count === 0) {
        majority = nums[i];
        count = 1;
      }
    }
  
    // Declare a variable to store the frequency of the majority element.
    let frequency = 0;
  
    // Iterate over the array again to count the number of times the majority element appears.
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === majority) {
        frequency++;
      }
    }
  
    // Return the majority element if it appears more than half the time, or -1 if it does not.
    return frequency > Math.floor(nums.length / 2) ? majority : -1;
  }