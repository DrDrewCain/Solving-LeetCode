/**
 * This function returns an array of products of all the elements of the input array except the element at the corresponding index.
 * @author Mark
 * @param nums - The input array.
 * @returns - An array of products of all the elements of the input array except the element at the corresponding index.
 */
function productExceptSelf(nums: number[]): number[] {
  // Initialize two arrays to store the products of all the elements to the left and right of the current index.
  // The elements of the left_products array will be the products of all the elements to the left of the current index,
  // and the elements of the right_products array will be the products of all the elements to the right of the current index.
  const left_products = new Array(nums.length).fill(1);
  const right_products = new Array(nums.length).fill(1);

  // Calculate the products of all the elements to the left of each index.
  // We start at index 1 because the product of all the elements to the left of index 0 is 1.
  for (let i = 1; i < nums.length; i++) {
    left_products[i] = left_products[i - 1] * nums[i - 1];
  }

  // Calculate the products of all the elements to the right of each index.
  // We start at index nums.length - 2 because the product of all the elements to the right of index nums.length - 1 is 1.
  for (let i = nums.length - 2; i >= 0; i--) {
    right_products[i] = right_products[i + 1] * nums[i + 1];
  }

  // Calculate the final answer by multiplying the corresponding elements from the left_products and right_products arrays.
  const answer = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    answer[i] = left_products[i] * right_products[i];
  }

  // Return the answer array.
  return answer;
}