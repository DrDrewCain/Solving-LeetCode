/**
 * @author Mark
 * @param s 
 * @returns 
 */
function isPalindrome(s: string): boolean {
    // Convert all uppercase letters into lowercase letters.
    s = s.toLowerCase();
  
    // Remove all non-alphanumeric characters.
    s = s.replace(/[^a-zA-Z0-9]/g, "");
  
    // Check if the string is a palindrome.
    return s === s.split("").reverse().join("");
  }