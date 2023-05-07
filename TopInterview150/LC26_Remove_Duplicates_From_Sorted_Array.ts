/**
 * Removes all duplicates in `nums` in-place. The order of the elements is kept the same. Then returns the number of unique elements in `nums`.
 * @author Mark
 * @param nums The array to remove duplicates from.
 * @returns The number of unique elements in `nums`.
 */
function removeDuplicates(nums: number[]): number {
    // Declare variables.
    let i = 0; // The index of the next unique element in `nums`.
  
    // Iterate through the array, comparing the elements at each index.
    // If the element at index `j` is not equal to the element at index `i`,
    // then copy the element at index `j` to the destination array,
    // and increment `i` so that the next duplicate of the element at index `j` is not copied.
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        nums[++i] = nums[j];
      }
    }
  
    // Return the number of unique elements in `nums`.
    return i + 1;
  }
  
  // Space complexity: O(1)
  // Time complexity: O(n)