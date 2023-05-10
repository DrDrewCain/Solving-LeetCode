/**
 * This function returns the nth Tribonacci number.
 *
 * The Tribonacci sequence is a sequence of numbers where each number is the sum of the three previous numbers.
 * The first three Tribonacci numbers are 0, 1, and 1.
 * @author Mark
 * @param n The index of the Tribonacci number to return.
 * @returns The nth Tribonacci number.
 */
function tribonacci(n: number): number {
    // If the index is 0, return 0.
    if (n == 0) {
      return 0;
    }
  
    // If the index is 1 or 2, return 1.
    else if (n <= 2) {
      return 1;
    }
  
    // Initialize the first three Tribonacci numbers.
    let t0 = 0, t1 = 1, t2 = 1;
  
    // Iterate over the numbers from 3 to the index.
    for (let i = 3; i <= n; i++) {
      // Calculate the current Tribonacci number.
      let tn = t0 + t1 + t2;
  
      // Update the previous Tribonacci numbers.
      t0 = t1;
      t1 = t2;
      t2 = tn;
    }
  
    // Return the current Tribonacci number.
    return t2;
  }