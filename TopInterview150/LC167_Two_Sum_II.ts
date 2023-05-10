/**
 * @author Mark
 * @param target
 * @param numbers
 * This function finds two numbers in the array `numbers` that add up to the target `target`.
 * The function returns an array of two numbers, where the first number is the index of the first number in the array and the second number is the index of the second number in the array.
 * If there are no two numbers in the array that add up to the target, the function returns an empty array.
 */
function twoSum(numbers: number[], target: number): number[] {
    // `left` is the index of the leftmost number in the array.
    let left = 0;
  
    // `right` is the index of the rightmost number in the array.
    let right = numbers.length - 1;
  
    // While the left index is less than the right index...
    while (left < right) {
      // Calculate the sum of the two numbers at the left and right indices.
      const sum = numbers[left] + numbers[right];
  
      // If the sum is equal to the target...
      if (sum === target) {
        // Return an array with the left and right indices.
        return [left + 1, right + 1];
      }
      // If the sum is less than the target...
      else if (sum < target) {
        // Increment the left index.
        left++;
      }
      // If the sum is greater than the target...
      else {
        // Decrement the right index.
        right--;
      }
    }
  
    // If the left index is equal to the right index, then there are no two numbers in the array that add up to the target.
    return [];
  }
  
  /**
   * Alternative Solutional Approach
   *
   * This function uses a hash table to find two numbers in the array `numbers` that add up to the target `target`.
   * The function returns an array of two numbers, where the first number is the index of the first number in the array and the second number is the index of the second number in the array.
   * If there are no two numbers in the array that add up to the target, the function returns an empty array.
   */
  function twoSum2(numbers: number[], target: number): number[] {
    // `seen` is a hash table that maps numbers to their indices in the array.
    const seen = {};
  
    // For each number in the array...
    for (let i = 0; i < numbers.length; i++) {
      // Calculate the difference between the target and the current number.
      const diff = target - numbers[i];
  
      // If the difference is in the hash table...
      if (seen[diff] !== undefined) {
        // Return an array with the index of the current number and the index of the difference.
        return [seen[diff] + 1, i + 1];
      }
  
      // Add the current number to the hash table.
      seen[numbers[i]] = i;
    }
  
    // If the hash table is empty, then there are no two numbers in the array that add up to the target.
    return [];
  }