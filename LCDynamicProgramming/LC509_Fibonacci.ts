/**
 * This function returns the Fibonacci number at the specified index.
 * @autor Mark
 * @param n The index of the Fibonacci number to return.
 * @returns The Fibonacci number at the specified index.
 */
function fib(n: number): number {
    // If the index is less than or equal to 1, return the index.
    if (n <= 1) {
      return n;
    }
  
    // Initialize the previous two Fibonacci numbers.
    let prev1 = 0, prev2 = 1;
  
    // Initialize the current Fibonacci number.
    let current = 0;
  
    // Iterate over the numbers from 2 to the index.
    for (let i = 2; i <= n; i++) {
      // Calculate the current Fibonacci number.
      current = prev1 + prev2;
  
      // Update the previous Fibonacci numbers.
      prev1 = prev2;
      prev2 = current;
    }
  
    // Return the current Fibonacci number.
    return current;
  }