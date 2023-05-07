/**
 * This function merges two strings alternately, character by character.
 * @author Mark
 * @param word1 - The first string.
 * @param word2 - The second string.
 * @returns - The merged string.
 */
function mergeAlternately(word1: string, word2: string): string {
    // Initialize a variable to store the merged string.
    let merged = "";
  
    // Get the length of the longer string.
    const longerLength = Math.max(word1.length, word2.length);
  
    // Loop over the characters in the longer string, alternating between the two strings.
    for (let i = 0; i < longerLength; i++) {
      if (i < word1.length) {
        merged += word1[i];
      }
  
      if (i < word2.length) {
        merged += word2[i];
      }
    }
  
    // Return the merged string.
    return merged;
  }