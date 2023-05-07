/**
* This function reverses all the vowels in a string.
* @author Mark
* @param s - The string to reverse the vowels of.
* @returns - The string with the vowels reversed.
*/
function reverseVowels(s: string): string {
  // Create a set to store the vowels.
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  // Split the string into an array of characters.
  const characters = s.split('');

  // Declare two variables to track the left and right index of the array.
  let left = 0;
  let right = characters.length - 1;

  // While the left index is less than the right index, do the following:
  while (left < right) {
    // Check if the current character at the left index is a vowel.
    if (!vowels.has(characters[left])) {
      // If it is not a vowel, increment the left index and continue.
      left++;
      continue;
    }

    // Check if the current character at the right index is a vowel.
    if (!vowels.has(characters[right])) {
      // If it is not a vowel, decrement the right index and continue.
      right--;
      continue;
    }

    // Swap the current characters at the left and right index.
    const temp = characters[left];
    characters[left] = characters[right];
    characters[right] = temp;

    // Increment the left index and decrement the right index.
    left++;
    right--;
  }

  // Join the characters of the array into a string.
  return characters.join('');
}