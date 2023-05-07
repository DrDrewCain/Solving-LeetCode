/**
* This function finds the greatest common divisor (GCD) of two strings.
*
* @author Mark
* @param str1 - The first string.
* @param str2 - The second string.
* @returns - The GCD of the two strings.
*/
function gcdOfStrings(str1: string, str2: string): string {
    // Get the length of each string.
    const len1 = str1.length, len2 = str2.length;
  
    // Find the GCD of the lengths of the strings.
    const gcd = findGCD(len1, len2);
  
    // Get the substring of length GCD from the beginning of the first string.
    const substring = str1.slice(0, gcd);
  
    // Check if both strings concatenated in any order equals the concatenation of the substring for each string.
    // If so, return the substring, otherwise return an empty string.
    return (str1 + str2 === str2 + str1 && isDivisible(str1, substring) && isDivisible(str2, substring)) ? substring : '';
  }
  
  /**
  * This function calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
  *
  * @param a - The first number.
  * @param b - The second number.
  * @returns - The GCD of the two numbers.
  */
  function findGCD(a: number, b: number): number {
    // If b is 0, then a is the GCD.
    return b === 0 ? a : findGCD(b, a % b);
  }
  
  /**
  * This function checks if a string is divisible by a given substring by checking if the length of the string
  * is a multiple of the length of the substring and if the substring is the prefix of the string.
  *
  * @param s - The string.
  * @param substr - The substring.
  * @returns - True if the string is divisible by the substring, false otherwise.
  */
  function isDivisible(s: string, substr: string): boolean {
    const n = s.length, m = substr.length;
    return n % m === 0 && s.slice(0, m) === substr;
  }