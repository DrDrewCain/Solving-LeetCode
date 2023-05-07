/**
 * @author Mark
 * This function takes two arguments: an array of numbers representing the number of candies each kid has, and an integer representing the number of extra candies.
 *
 * The function returns an array of booleans, where each boolean represents whether the corresponding kid will have the most candies after receiving all the extra candies.
 *
 * For example, if the input array is [2, 3, 5, 1, 3] and the extra candies is 3, then the output array will be [true, true, true, false, true]. 
 * This is because after receiving all the extra candies, the first, second, and third kids will have 5, 6, and 8 candies, respectively, which is the most of any kid. 
 * The fourth kid will have 4 candies, which is not the most, and the fifth kid will have 6 candies, which is the most.
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  // Find the maximum number of candies among all the kids.
  const maxCandies = candies.reduce((acc, curr) => Math.max(acc, curr));

  // Create a new array, where each element is true if the corresponding kid will have the maximum number of candies after receiving all the extra candies, and false otherwise.
  const result = candies.map((candy) => {
    // Calculate the new number of candies for the kid.
    const newCandies = candy + extraCandies;

    // Return true if the new number of candies is greater than or equal to the maximum number of candies, and false otherwise.
    return newCandies >= maxCandies;
  });

  // Return the result array.
  return result;
}