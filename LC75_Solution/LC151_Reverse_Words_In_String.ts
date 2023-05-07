/**
 * This function reverses the order of the words in a string.
 * @author Mark
 * @param s - The string to reverse the words of.
 * @returns - The string with the words reversed.
 */
function reverseWords(s: string): string {
    // Trim the input string to remove leading/trailing spaces.
    s = s.trim();
  
    // Split the string by one or more spaces using a regular expression.
    // This will create an array of words, where each word is a non-space character sequence.
    const words = s.split(/\s+/);
  
    // Reverse the order of the words in the array.
    words.reverse();
  
    // Join the words back together into a string, separated by a single space.
    return words.join(' ');
  }