/**
 * @author Mark
 * @param nums1
 * @param nums2
 * @returns the current element array. 
 * This function finds the median of two sorted arrays.
 * The `nums1` and `nums2` arrays are sorted in ascending order.
 * The function returns the median of the two arrays.
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // `m` is the length of the `nums1` array.
  const m = nums1.length;

  // `n` is the length of the `nums2` array.
  const n = nums2.length;

  // `totalLength` is the total length of the two arrays.
  const totalLength = m + n;

  // `isEven` is a boolean value that indicates whether the total length of the two arrays is even.
  const isEven = totalLength % 2 === 0;

  // `left` is the index of the current element in the `nums1` array.
  let left = 0;

  // `right` is the index of the current element in the `nums2` array.
  let right = 0;

  // `current` is the current element.
  let current;

  // `prev` is the previous element.
  let prev;

  // Iterate over the first half of the two arrays.
  for (let i = 0; i <= totalLength / 2; i++) {
    // If the current element in the `nums1` array is less than or equal to the current element in the `nums2` array...
    if (nums1[left] <= nums2[right]) {
      // Set the current element to the current element in the `nums1` array.
      current = nums1[left];
      // Increment the `left` index.
      left++;
    } else {
      // Set the current element to the current element in the `nums2` array.
      current = nums2[right];
      // Increment the `right` index.
      right++;
    }
  }

  // If the total length of the two arrays is even...
  if (isEven) {
    // Set the median to the average of the current and previous elements.
    return (prev + current) / 2;
  } else {
    // Set the median to the current element.
    return current;
  }
}