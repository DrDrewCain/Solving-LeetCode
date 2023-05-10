/**
 * @author Mark
 * @param num 
 * @param target 
 * @returns 
 */

function twoSum(num: number[], target: number): number[] {
    // This function finds two numbers in the array `num` that add up to the target `target`.
    // The function returns an array of two numbers, where the first number is the index of the first number in the array and the second number is the index of the second number in the array.
    // If there are no two numbers in the array that add up to the target, the function returns an empty array.
  
    // Iterate over the array `num`.
    for (let i = 0; i < num.length; i++) {
      // Iterate over the array `num` starting at the index `i + 1`.
      for (let j = i + 1; j < num.length; j++) {
        // If the sum of the two numbers at the `i` and `j` indices is equal to the target...
        if (num[i] + num[j] === target) {
          // Return an array with the `i` and `j` indices.
          return [i, j];
        }
      }
    }
  
    // If the function reaches this point, then there are no two numbers in the array that add up to the target.
    return [];
  }