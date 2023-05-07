function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const m = nums1.length;
    const n = nums2.length;
    const totalLength = m + n;
    const isEven = totalLength % 2 === 0;
  
    let left = 0;
    let right = 0;
    let current, prev;
  
    for (let i = 0; i <= totalLength / 2; i++) {
      prev = current;
      if (nums1[left] === undefined || nums2[right] < nums1[left]) {
        current = nums2[right++];
      } else {
        current = nums1[left++];
      }
    }
  
    return isEven ? (prev + current) / 2 : current;
  }
  