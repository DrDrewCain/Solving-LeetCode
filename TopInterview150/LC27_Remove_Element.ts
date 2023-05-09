/**
 * Removes all occurrences of `val` from `nums` in-place. The order of the elements may be changed. Then returns the number of elements in `nums` which are not equal to `val`.
 * @author Mark
 * @param nums The array to remove elements from.
 * @param val The value to remove.
 * @returns The number of elements in `nums` which are not equal to `val`.
 */
function removeElement(nums: number[], val: number): number {
  // Declare variables.
  let nonValCount = 0; // The number of elements in `nums` which are not equal to `val`.

  // Iterate through the array, comparing the elements at each index.
  // If the element at index `i` is not equal to `val`,
  // then copy the element to the destination array.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[nonValCount++] = nums[i];
    }
  }

  // Return the number of elements in `nums` which are not equal to `val`.
  return nonValCount;
}

// Space complexity: O(1)
// Time complexity: O(n)


/**
 *  Alternative Solutional Approach
 * 
 */

function removeElement2(nums: number[], val: number): number {
  // Declare variables.
  let i = 0,
    j = 0;

  // Iterate through the array, comparing the elements at each index.
  // If the element at index `i` is not equal to `val`,
  // then copy the element to the destination array.
  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[j++] = nums[i];
    }
    i++;
  }

  // Return the number of elements in nums which are not equal to val.
  return j;
}