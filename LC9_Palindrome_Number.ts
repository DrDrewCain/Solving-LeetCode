/**
 * @author Mark
 * @param x 
 * @returns 
 *  * This function checks if a number is a palindrome.
 * A palindrome is a number that reads the same backward as forward.
 * The function returns `true` if the number is a palindrome, or `false` if it is not.
 */
function isPalindrome(x: number): boolean {
  // Check if the number is negative or a single-digit number.
  // If it is, then it is not a palindrome.
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  // Initialize a variable to store the reversed number.
  let reversed = 0;

  // Loop while the original number is greater than the reversed number.
  while (x > reversed) {
    // Multiply the reversed number by 10 and add the units digit of the original number.
    reversed = reversed * 10 + (x % 10);
    // Divide the original number by 10 to remove the units digit.
    x = Math.floor(x / 10);
  }

  // Return true if the original number is equal to the reversed number, or false if it is not.
  return x === reversed || x === Math.floor(reversed / 10);
}

/**
 * Alternative approach
 * @param x 
 * @returns 
 */
// This function checks if a number is a palindrome by converting it to a string, reversing the string, and converting the reversed string back to a number.
// The function returns `true` if the number is a palindrome, or `false` if it is not.
function isPalindromeAlt(x: number): boolean {
  return String(x) === String(x).split('').reverse().join('');
}