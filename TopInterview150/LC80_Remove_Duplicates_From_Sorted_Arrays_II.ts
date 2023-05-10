/**
 * Removes duplicates in-place such that each unique element appears at most twice.
 * @author Mark
 * @param nums The array to remove duplicates from.
 * @returns The number of elements in the array after removing duplicates.
 */
function removeDuplicates2(nums: number[]): number {
    // Declare variables.
    let i = 0, // The index of the next element to be added to the array.
      j = 0; // The index of the current element in the array.
  
    // Iterate over the array.
    while (j < nums.length) {
      // If `i` is less than 2 or the current element is greater than the previous two elements,
      // then add the current element to the array.
      if (i < 2 || nums[j] > nums[i - 2]) {
        nums[i++] = nums[j];
      }
      j++;
    }
  
    // Return the number of elements in the array.
    return i;
  }