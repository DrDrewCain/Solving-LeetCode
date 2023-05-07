/**
 * Merges two sorted arrays `nums1` and `nums2` into a single sorted array.
 * @author Mark
 * @param nums1 The first array.
 * @param m The index of the first element in `nums1`.
 * @param nums2 The second array.
 * @param n The index of the first element in `nums2`.
 * @returns The merged array.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
    // Declare variables.
    let i = m - 1,
      j = n - 1,
      k = m + n - 1;
  
    // Iterate through the arrays, comparing the elements at each index.
    // Copy the smaller element into the destination array.
    while (i >= 0 && j >= 0) {
      // If the element at index `i` in `nums1` is greater than the element at index `j` in `nums2`,
      // then copy the element at index `i` into the destination array.
      // Otherwise, copy the element at index `j` into the destination array.
      nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
  
    // Copy any remaining elements from `nums2` into the destination array.
    while (j >= 0) {
      nums1[k--] = nums2[j--];
    }
  
    // Return the merged array.
    return nums1;
  }


/**
 * Although the above code is pretty easy to understand! 
 * The following code is much more concise and clean, it is only written in 4 lines of code. 
 * This is our optimal solutional approach to creating concise code. 
 */
function merge2(nums1: number[], m: number, nums2: number[], n: number): number[] {
    // 1. Append the second array to the first array.
    nums1.splice(m, nums1.length - m, ...nums2);
  
    // 2. Sort the merged array.
    nums1.sort((a, b) => a - b);
  
    // 3. Return the merged array.
    return nums1;
  }